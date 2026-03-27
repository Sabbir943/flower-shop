import { Suspense, useState } from 'react';
 import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import AvailableFlower from './component/AvailableFlower/AvailableFlower'
import Navbar from './component/NavBar/Navbar'
import BannerSection from './component/UI/BannerSection';
import Footer from './component/Footer/Footer';
import BannerInput from './component/BannerInput/BannerInput';

const flowerData=async()=>{
  const flowerDataRes=await fetch('flower-data.json');
  return flowerDataRes.json();
}
function App() {
  const[coin,setCoin]=useState(50)
const flowerDataPromise=flowerData();  

  return (
    <>
    
   <Navbar coin={coin} setCoin={setCoin}></Navbar>
   <BannerSection></BannerSection>
   <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
   <AvailableFlower flowerDataPromise={flowerDataPromise} coin={coin} setCoin={setCoin}></AvailableFlower>  
   </Suspense>
  
   <Footer></Footer>
    <ToastContainer
    position="top-center"
    /> 

     
    </>
  )
}

export default App
