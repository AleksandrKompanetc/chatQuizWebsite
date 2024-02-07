import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from '../pages/main/Main';
import Login from '../pages/login/Login';
import { connect } from 'react-redux';
import Chat from '../pages/chat/Chat';
import Quiz from '../pages/quiz/Quiz';

const AppRouter = ({
    user,
}) => {
    console.log(user);
    return (
        user ?
            <Routes>
                <Route path='/main' element={<Main />} exact />
                <Route path='/chat' element={<Chat />} />
                <Route path='/quiz' element={<Quiz />} />
                <Route path="*" element={<Navigate to={'/main'} />} />
            </Routes>
            :
            <Routes>
                <Route path='/login' element={<Login />} exact />
                <Route path="*" element={<Navigate to={'/login'} />} />
            </Routes>
    )
};

const getUserId = state => state.userState.userId;
const mapStateToProps = state => ({
    user: getUserId(state),
});

export default connect(mapStateToProps)(AppRouter);
