import React from 'react';
import { createBrowserRouter } from 'react-router';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import Order from './../Pages/Order/Order';
import Login from './../Pages/Login & Register/Login';
import SignUp from '../Pages/Login & Register/SignUp';
import PrivateRoute from './PrivateRoute';
import Secret from '../Pages/Login & Register/Secret';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home> 
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoute>
                    <Secret></Secret>
                </PrivateRoute>
            },
        ]
    }
]);

export default Router;