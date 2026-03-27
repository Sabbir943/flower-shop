import React from 'react';
import navLogo from '../../assets/flower.png'
import dollarImg from '../../assets/DoubleDollar.png'
const Navbar = ({coin,setCoin}) => {
    return (
        <div className=''>

        <div className='bg-pink-200 p-3 '>

        <div className=' flex justify-between items-center w-11/12 mx-auto '>
        <div className='flex items-center gap-2'>

           <img className='w-14 rounded-2xl' src={navLogo} alt="flower logo" />
           <p className='text-2xl font-bold'>Flower Shop</p>
        </div>
           <div className='flex gap-2'>

            <p className='font-bold text-xl'>{coin.toFixed(2)}<span>$</span></p>
            <img className='' src={dollarImg} alt="dollarImg" />
           </div>
             
        </div>
        </div>
        </div>
    );
};

export default Navbar;