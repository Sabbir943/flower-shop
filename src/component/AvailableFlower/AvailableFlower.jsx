import React, { use, useState } from 'react';
import FlowerData from './FlowerData';
import SeletedFlower from './SeletedFlower';



const AvailableFlower = ({flowerDataPromise ,coin,setCoin}) => {
  const[selectedType,setSelected]=useState('Available') ;
  const[selectedFlower,setSelectedFlower]=useState([]) ;
  const flowerData=use(flowerDataPromise);
    // console.log(flowerData)
    return (
        <div>
    <div className='flex justify-between w-11/12 mx-auto m-4'>
        {
            selectedType==='Available'?<h1 className='text-2xl font-bold'>Available Flower</h1>:
            <h1 className='text-2xl font-bold'>Selected Flower({selectedFlower.length}/{flowerData.length})</h1>
        }
        <div>
            <button onClick={()=>setSelected('Available')} className={`${selectedType==='Available'?"bg-[#E7FE29]":""} rounded-r-none rounded-l-2xl p-3 text-xl`}>Available</button>
            <button onClick={()=>setSelected('Selected')} className={`${selectedType==='Selected'?"bg-[#E7FE29]":""} rounded-l-none rounded-r-2xl p-3 text-xl`}>Selected</button>
        </div>
    </div>
    {
        selectedType==='Available'? <div className='w-11/12 mx-auto mt-5 '>
        {
            <FlowerData  flowerData={flowerData} setSelectedFlower={setSelectedFlower} selectedFlower={selectedFlower} coin={coin} setCoin={setCoin}></FlowerData>
        }
       </div>:<SeletedFlower selectedFlower={selectedFlower} setSelectedFlower={setSelectedFlower} coin={coin} setCoin={setCoin}></SeletedFlower>
    }
   
        </div>
    );
};

export default AvailableFlower;