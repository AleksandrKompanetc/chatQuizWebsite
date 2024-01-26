import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../Login/Login';

function AppRouter() {

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/main' element={<Main />} />
        </Routes>
    );
}

export default AppRouter;