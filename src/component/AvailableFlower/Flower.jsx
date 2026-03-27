import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Flower = ({flowers,setSelectedFlower,selectedFlower, coin,setCoin}) => {
    const[isSelected,setIsSelected]=useState(false);
    const handleSelectedFlower=(flowers)=>{
      const newCoin=coin-flowers.price;
      if(newCoin>=0){
        setCoin(newCoin);
        toast.success(`${flowers.name} is selected`);
      }
      else{
      toast.error(`${flowers.name} is not selected`);
      }
       setIsSelected(true);
       setSelectedFlower([...selectedFlower,flowers]);
    }
    return (
        <div className=' '>
            <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      className='w-full h-62.5'
      src={flowers.img}
      alt="flower" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{flowers.name}</h2>
    <p className='line-clamp-2'>{flowers.description}</p>
     <div className="divider"></div>
     <div className=''>
       {
        flowers.spices.map(i=><span className='btn btn-success m-1'>{i}</span>)
       }
     </div>
    <div className='flex justify-between items-center'>
        <p className='text-xl font-semibold'>Price: {flowers.price}$</p>
        <p className='text-xl font-semibold text-right'>Rating({flowers.rating})</p>
    </div>
   <button onClick={()=>handleSelectedFlower(flowers)} disabled={isSelected} className="btn btn-active btn-primary m-2 hover:bg-pink-400 border-none">Add to Cart</button>
  </div>
</div>
        </div>
    );
};

export default Flower;