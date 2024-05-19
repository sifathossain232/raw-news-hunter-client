import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className='flex justify-center relative mt-8 mb-16 w-[1280px] mx-auto'>
                <nav className='flex gap-5 text-lg font-sans font-medium text-[#706F6F]'>
                    <Link to='/category/0'>Home</Link>
                    <Link>About</Link>
                    <Link>Career</Link>
                </nav>
                <div className='absolute right-0'>
                    <nav className='flex items-center gap-5'>
                        {user && <Link><FaUserCircle className='text-4xl' />


                        </Link>}
                        {user ?
                            <button onClick={handleLogOut} className='bg-[#403f3f] text-base font-sans font-medium text-white py-2 px-6'>Logout</button> :
                            <Link to='/login'>
                                <button className='bg-[#403f3f] text-base font-sans font-medium text-white py-2 px-6'>Login</button>
                            </Link>
                        }
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;