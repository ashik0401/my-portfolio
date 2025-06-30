import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='bg-[#2C2F48] '>
            <ScrollToTop />
            <Navbar />
            <div className=' md:w-10/12 md:mx-auto px-4 overflow-x-hidden'>
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default RootLayout;