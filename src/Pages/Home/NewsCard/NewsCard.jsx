import moment from 'moment';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, author, total_view, rating } = news;
    console.log(news);
    return (
        <div>
            <div className="card w-[620px] bg-base-100 shadow-xl mb-8">
                <div className="bg-gray-100 p-5 border-b">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3'>
                            <img className='h-12 rounded-full' src={author?.img} alt="" />
                            <div>
                                <p className='text-base font-medium font-serif'>{author?.name}</p>
                                <p className='font-thin'>{moment(author?.published_date).format('yyy-mm-d')}</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-5 text-2xl font-extrabold'>
                                <CiBookmark />
                                <CiShare2 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-body p-5'>
                    <h2 className="text-xl font-bold font-sans my-5">{title}</h2>
                    <figure><img className='rounded-lg my-5' src={image_url} alt="Shoes" /></figure>
                    <p className='font-sans text-justify'>{details.length < 250 ? <p>{details}</p> : <p>{details.slice(0, 250)}...  <Link className='text-[#FF8C47] font-bold' to={`/news/${_id}`}>Read More</Link></p>}</p>
                </div>
                <div className='flex justify-between py-4 border-t m-5'>
                    <div className='flex gap-3'>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar className='text-[#FF8C47]' />}
                            fullSymbol={<FaStar />}
                        ></Rating>
                        <span>{rating?.number}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaEye />
                        {total_view}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;