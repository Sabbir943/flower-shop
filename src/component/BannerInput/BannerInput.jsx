import React from 'react';

const BannerInput = () => {
    return (
        <div className='relative'>

        <div className='bg-[#E6ECF0] w-11/12 mx-auto absolute -bottom-100 md:left-10  md:bottom-104 mb-5 rounded-2xl'>
            <div className='text-center p-5  '>
            <h1 className='text-2xl mb-3'>Subscribe to our Newsletter</h1>
            <p className='mb-3'>Get the latest updates and news right in your inbox!</p>
            <input className='bg-white border btn mb-6' type="email" name="" id="" placeholder='Enter Your Email' />
            <button className="btn btn-active rounded-2xl mb-6 btn-secondary rounded-l-none">Subscribes</button>
            </div>
           
        </div>
        </div>
    );
};

export default BannerInput;