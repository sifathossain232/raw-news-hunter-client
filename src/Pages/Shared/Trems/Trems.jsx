import React from 'react';
import { Link } from 'react-router-dom';

const Trems = () => {
    return (
        <div className='w-[1280px] mx-auto'>
            <h2 className='text-center mb-5 text-xl text-[#595858] font-semibold font-sans'>Trems & Conditions</h2>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur corporis, similique a eum sit, id voluptate ea
                voluptatem ullam sapiente dolore distinctio quia unde,
                dolorum illo. Dignissimos minima nobis non, placeat enim
                autem voluptatibus rem suscipit blanditiis ea velit beatae
                soluta earum voluptatem unde veritatis aliquam doloribus 
                praesentium corrupti debitis.
            </p>
            <p className='mt-5 text-lg text-[#595858]'>Go back to <Link className='font-semibold' to='/register'>Register</Link></p>
        </div>
    );
};

export default Trems;