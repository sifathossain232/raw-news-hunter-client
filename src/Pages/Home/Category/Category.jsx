import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitel from '../../../Hooks/useTitel';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    useTitel('Category')
    return (
        <div>
            {id && <h2 className='mb-5 text-xl font-medium'>This Category News: {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;