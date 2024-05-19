import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div>
                <div className='flex justify-center w-[1280px] mx-auto'>
                    <div className='w-3/12'>
                        <LeftNav></LeftNav>
                    </div>
                    <div className='w-6/12'>
                        <Outlet></Outlet>
                    </div>
                    <div className='w-3/12'>
                        <RightNav></RightNav>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;