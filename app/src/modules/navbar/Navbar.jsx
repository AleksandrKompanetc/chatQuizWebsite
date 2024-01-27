import React from 'react';
import { useDispatch } from 'react-redux';
import { Firebase } from '../../firebase/firebaseConfig';
import { clearUser } from '../../store/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { Layout, Button } from 'antd';


const { Header } = Layout;

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const docId = localStorage.getItem('docId');

        if (docId) {
            const usersRef = Firebase.firestore().collection('users');
            await usersRef.doc(docId).delete();
        }

        localStorage.removeItem('userId');
        localStorage.removeItem('docId');
        dispatch(clearUser());

        navigate('/');
    };

    return (
        <Header>
            <Button onClick={handleLogout}>Log out</Button>
        </Header>
    )
}

export default Navbar;