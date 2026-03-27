import React from 'react';
import { MdDelete } from "react-icons/md";
const SeletedFlower = ({selectedFlower,setSelectedFlower,coin,setCoin}) => {
   
   const handleDelete=(selectedAllFlower)=>{
      const fillterFlower=selectedFlower.filter(item=>item.name!==selectedAllFlower.name);
      setSelectedFlower(fillterFlower);
      setCoin(coin+selectedAllFlower.price);
   }
 
   
    return (
        <div className='w-11/12 mx-auto'>
           {
           selectedFlower.length===0?<div className='flex flex-col items-center border p-10 rounded-2xl'>
            <h1 className='text-2xl font-semibold m-3'>No Selected Flower</h1>
            <h1 className='text-xl text-shadow-taupe-500'>Please Selected Flower for Buy</h1>
           </div>: selectedFlower.map((selectedAllFlower,ind)=>(
                <div key={ind}>
                    <div className='flex justify-between items-center border mb-3 rounded-2xl'>
                    <div className='flex items-center gap-3'>
                        <img className='w-17.5 h-17.5 rounded-2xl mb-3  p-3' src={selectedAllFlower.img} alt="flower" />
                    <div className='font-semibold'>

                    <h1 className='text-xl'>{selectedAllFlower.name}</h1>
                    <h1>{selectedAllFlower.price}$</h1>
                    </div>
                    </div>
                    <div onClick={()=>handleDelete(selectedAllFlower)} className='p-4 text-red-500 btn m-3 text-2xl'>
                        <MdDelete />
                    </div>
                    
                    </div>
                </div>
            ))
           }
        </div>
    );
};

export default SeletedFlower;