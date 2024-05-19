import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, SetCategories] = useState([]);

    useEffect(() => {
        fetch('https://raw-news-hunter-server-eqbsexcuq-sifats-projects-f10afd45.vercel.app/categories')
            .then(res => res.json())
            .then(data => SetCategories(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <h4 className='mb-5 text-xl font-medium'>All Category</h4>
            <div className='pl-10'>
                {
                    categories.map(category => <p
                        key={category.id}
                        className='mb-2 text-[#9F9F9F] text-lg'
                    >
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;