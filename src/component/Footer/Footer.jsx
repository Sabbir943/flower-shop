import React from 'react';
import footerLogo from '../../assets/Banner-Img.png'
import BannerInput from '../BannerInput/BannerInput';
const Footer = () => {
    return (
        
        <div className='mt-35 bg-[#262C30] p-20'>
            
            <img className='w-40 mx-auto mb-8' src={footerLogo} alt="" />
            <div className=' flex flex-col md:flex-row justify-between items-center '>
                <div className='text-white'>
                    <p className=' text-xl font-bold mb-4'>About Us</p>
                    <p>We are a passionate team </p>
                    <p>dedicated to providing the best </p>
                    <p>services to our customers.</p>
                </div>
                <div className='text-white'>
                    <p className='text-xl mb-2'>Quick Links</p>
                    <ol className='space-y-3'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ol>
                </div>
                <div className='text-white '>
                    <p className='mb-2'>Subscribe</p>
                    <p className='mb-2'>Subscribe to our newsletter for the latest updates.</p>
                    <input className='bg-white rounded-2xl text-black btn rounded-r-none' type="email" name="" id="" placeholder='Enter Your Email '/>
                    <button className="btn btn-active rounded-2xl btn-secondary rounded-l-none">Subscribes</button>
                </div>
            </div>
            <hr className='text-white mt-6'></hr>
            <p className='text-white text-center mt-5'>&copy;2026 Your Company All Rights Reserved</p>
            <div>
                {
                    <BannerInput></BannerInput>
                }
            </div>
        </div>
    );
};

export default Footer;