import React from 'react';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4 className='mb-5 text-xl font-medium'>Login With</h4>
                <div className='border border-blue-400 rounded-md flex justify-center'>
                    <button className='flex items-center gap-5 py-2 text-base font-medium text-blue-400'><FaGoogle /> Login With Google</button>
                </div>
                <div className='border border-gray-600 rounded-md flex justify-center mt-2'>
                    <button className='flex items-center gap-5 py-2 text-base font-medium text-gray-600'><FaGithub /> Login With Github</button>
                </div>
            </div>
            <div className='mt-5'>
                <h4 className='mb-4 text-xl font-medium'>Find Us On</h4>
                <div className='border-x rounded-md w-full'>
                    <Link className='border-y p-2 flex items-center gap-5 pl-5 text-lg text-[#706F6F] font-medium'><FaFacebook className='text-blue-900' /> Facebook</Link>
                    <Link className='border-y p-2 flex items-center gap-5 pl-5 text-lg text-[#706F6F] font-medium'><FaTwitter className='text-blue-500' /> Twitter</Link>
                    <Link className='border-y p-2 flex items-center gap-5 pl-5 text-lg text-[#706F6F] font-medium'><FaInstagram className='text-red-500' /> Instagram</Link>
                </div>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;