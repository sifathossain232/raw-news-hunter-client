import React from 'react';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <p className='flex items-center justify-center gap-5 text-lg font-light text-[#403f3f] font-mono'><FaCopyright className='text-gray-500' /> Copyright My News</p>
        </div>
    );
};

export default Footer;