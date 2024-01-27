import React from 'react';
import { auth, Firebase } from '../../firebase/firebaseConfig';
import { fetchUserRequest, fetchUserSuccess } from '../../store/actions/userAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        const provider = new Firebase.auth.GoogleAuthProvider();
        try {
            const result = await auth.signInWithPopup(provider);
            if (result.user) {
                const userId = result.user.uid;
                const userEmail = result.user.email;
                const userName = result.user.displayName;
                const userData = {
                    id: userId,
                    email: userEmail,
                    name: userName,
                };
                const usersRef = Firebase.firestore().collection('users').add(userData);
                const docId = (await usersRef).id;
                localStorage.setItem('userId', userId);
                localStorage.setItem('docId', docId);
                dispatch(fetchUserRequest(docId));
                dispatch(fetchUserSuccess());
                navigate('/main');
            }
        } catch (error) {
            console.error('Google Login Error:', error);
        }
    };
    return (
        <div>
            Login
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
}

export default Login;