import React from 'react'
import './Banner.css'
import Iphone4 from '../../../assets/iphone4.png'

const Banner = () => {
  return (
    <div className='w-full mt-16'>

        <div className='banner_container mx-auto rounded-xl flex mt-8 justify-evenly w-10/12'>

        <div className='text2_container mt-36 w-10/12 mx-auto'>
          <h1 className='text-center font-bold text2'>
            makes better choice with US
          </h1>
          <p className='text-md text-center mt-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>


         <img src={Iphone4} className='w-6/12 mx-auto rounded-xl mt-8'></img>


        </div>

    </div>
  )
}

export default Banner