import React from 'react';
import { createBrowserRouter, useParams } from 'react-router';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import Order from './../Pages/Order/Order';
import Login from './../Pages/Login & Register/Login';
import SignUp from '../Pages/Login & Register/SignUp';
import PrivateRoute from './PrivateRoute';
import Secret from '../Pages/Login & Register/Secret';
import Dashboard from '../Layout/Dashboard';
import Cart from '../Pages/Dashboard/Cart';
import AllUsers from '../Pages/Dashboard/AllUsers';
import AddItems from '../Pages/Dashboard/AddItems';
import AdminRoute from './AdminRoute';
import ManageItems from '../Pages/Dashboard/ManageItems';
import UpdateItem from '../Pages/Dashboard/UpdateItem';
import Payment from '../Pages/Dashboard/Payment';
import PaymentHistory from '../Pages/Dashboard/PaymentHistory';

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
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // normal user route
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            // admin routes
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)

            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
        ]
    }
]);

export default Router;