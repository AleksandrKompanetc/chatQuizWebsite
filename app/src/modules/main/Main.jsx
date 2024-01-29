import React from 'react';
import Quiz from './components/quiz/Quiz';
import { useDispatch } from 'react-redux';
import { fetchUserSuccess, fetchUserRequest } from '../../store/actions/userAction';

function Main() {
    const dispatch = useDispatch();
    const docId = localStorage.getItem('docId');
    dispatch(fetchUserRequest(docId));
    return (
        <div>
            <Quiz />
        </div>
    )
}

export default Main;