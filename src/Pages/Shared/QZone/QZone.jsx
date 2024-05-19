import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='mt-3 bg-[#F3F3F3]'>
            <h4 className='p-3 mb-5 text-xl font-medium'>Q-Zone</h4>
            <div className='flex flex-col items-center gap-3 pb-4'>
                <img className='' src={qzone1} alt="" />
                <img className='' src={qzone2} alt="" />
                <img className='' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;