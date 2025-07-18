import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Pages/Footer';
import Navbar from '../Pages/Navbar';
import Home from '../Pages/Home';

const Main = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;