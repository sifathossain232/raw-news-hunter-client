import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";


const Header = () => {

    return (
        <div className='w-[1280px] mx-auto'>
            <div className="flex flex-col items-center">
                <img className='mt-10' src={logo} alt="" />
                <p className='my-4'><small>Journalism Without Fear or Favor</small></p>
                <p className='mb-4'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className=' bg-gray-100 p-3'>
                <div className='flex'>
                    <button className='bg-red-600 text-white text-xl py-2 px-4 fs-5'>Latest</button>
                    <Marquee speed={100} className='font-semibold'>
                        I can be a React component, multiple React components, or just some text.
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Header;