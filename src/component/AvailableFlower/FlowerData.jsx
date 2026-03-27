import React from 'react';
import Flower from './Flower';

const FlowerData = ({flowerData ,setSelectedFlower,selectedFlower,coin,setCoin}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                flowerData.map(flowers=><Flower flowers={flowers} setSelectedFlower={setSelectedFlower} selectedFlower={selectedFlower} coin={coin} setCoin={setCoin}></Flower>)
            }
        </div>
    );
};

export default FlowerData;