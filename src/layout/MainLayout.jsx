/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className=''>
                <Navbar />
            </div>
            <div className='min-h-[calc(100vh-133px)]'>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;