import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData();
    const {title, image_url, details, category_id} = news;
    return (
        <div className=''>
            <div className="card w-[1000px] bg-base-100 shadow-xl p-5">
                <figure><img className='rounded-xl w-full' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-bold font-sans my-5">{title}</h2>
                    <p className='font-sans text-justify'>{details}</p>
                    <div className="card-actions">
                        <Link to={`/category/${category_id}`}><button className="flex items-center gap-2 mt-8 bg-red-600 text-white p-3 text-base font-light font-serif"><GoArrowLeft />All news in this category</button></Link>
                    </div>
                </div>
            </div>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;