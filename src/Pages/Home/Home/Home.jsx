import React from 'react';
import useTitel from '../../../Hooks/useTitel';

const Home = () => {
    useTitel('Home')
    return (
        <div>
            <h3 className='mb-5 text-xl font-medium'>This is Home</h3>
        </div>
    );
};

export default Home;