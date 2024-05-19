import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div className='flex justify-between mx-auto w-[1280px]'>
                    <div>
                        <Outlet></Outlet>
                    </div>
                    <div>
                        <RightNav></RightNav>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;