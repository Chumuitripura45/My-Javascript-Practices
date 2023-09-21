import React from 'react'
import { useState } from 'react'
import './countStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../assets/chief.jpg'
import images from './src/images'


function CountApp() {
    const [count, setCount] = useState(0);

    // const image = [ 
    //   {
    //     src : './images1.jpg',
    //     alt : 'img1'
    //   },
    //   {
    //     src : './image3.jpg',
    //     alt : 'img2'
    //   }
    // ]
    
    const decrement = () =>{
        setCount(count - 1);
    }

    const increment = () => {
        setCount(count + 1);
    }
  return (
    <div className='flex space-x-3 justify-center items-center h-screen'>
            <div className="">
                <p className=' text-6xl font-bold text-center mb-5'>{count}</p>
                <button className=' bg-red-600 text-white py-2.5 rounded-md px-5 font-bold' onClick={decrement}>Decrement</button>
                <button className=' ml-20 bg-green-600 text-white py-2.5 rounded-md px-5 font-bold' onClick={increment}>Increment</button>
            </div>
            <p className='go'>Chumui</p>
            <button className='btn btn-primary '>Bootstrap</button>
            <img src={images[0].src} alt="" />
            <img src='./image3.jpg' alt="image3" />
    </div>
  )
}

export default CountApp
