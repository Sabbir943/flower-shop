import React from 'react';
import BannerImg from '../../assets/Banner-Img.png'
const BannerSection = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='h-[60vh] bg-[#F1F5EB] text-center p-3 rounded-2xl m-8 space-y-3'>
               <img className='w-30 mx-auto' src={BannerImg} alt="Banner flower" />
               <p className='text-2xl font-bold text-center '>Assemble Your Ultimate Beautiful Flower</p>
               <p className='text-xl font-semibold text-center '>Beyond Boundaries Beyond Limits</p>
               <button className="btn btn-warning ">Add to Carft</button>
            </div>
        </div>
    );
};

export default BannerSection;