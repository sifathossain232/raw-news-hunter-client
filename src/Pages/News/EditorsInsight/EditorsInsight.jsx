import React from 'react';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';

const EditorsInsight = () => {
    return (
        <div>
            <h4 className='my-5 text-xl font-medium'>Editors Insight</h4>
            <div className='flex gap-5'>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={first} alt="Shoes" /></figure>
                    <div className="my-5 px-2">
                        <h2 className="mb-3 text-base font-medium">Shoes</h2>
                        <p className='pb-3'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={second} alt="Shoes" /></figure>
                    <div className="my-5 px-2">
                        <h2 className="mb-3 text-base font-medium">Shoes</h2>
                        <p className='pb-3'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img className='w-full' src={third} alt="Shoes" /></figure>
                    <div className="my-5 px-2">
                        <h2 className="mb-3 text-base font-medium">Shoes</h2>
                        <p className='pb-3'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorsInsight;