import React from 'react'
import './Card.css'
import Iphone8 from '../../../assets/iphone8.png'
import Iphone2 from '../../../assets/iphone2.png'
import Iphone7 from '../../../assets/iphone7.png'

const Card1 = () => {
  return (
    <div className='w-8/12 mx-auto mt-36 container mb-8'>

    <h1 className='text-center my-32 text-zinc-700'>Newest released iphone</h1>

    <div className='flex card_container'>

    <div className='mx-2 card'>
          <img src={Iphone2}></img>
          <h1 className='text-zinc-600 pl-2'>iphone 13 pro</h1>
          <h4 className='text-sm pb-1 text-zinc-400'>256GB Capacity</h4>
          <h4 className='text-sm pb-1 text-zinc-400'>5.8‑inch screen</h4>
          <h4 className='text-sm pb-1 text-zinc-400'>4‑core GPU</h4>
        </div>

      <div className='mx-2 card'>
          <img src={Iphone8} className="iphone8"></img>
          <h1 className='text-zinc-600 pl-2'>iphone 13</h1>
          <h4 className='text-sm pb-1 text-zinc-400'>256GB Capacity</h4>
          <h4 className='text-sm pb-1 text-zinc-400'>6‑inch screen</h4>
          <h4 className='text-sm pb-1 text-zinc-400'>4‑core GPU</h4>
        </div>
        

        <div className='mx-2 card'>
          <img src={Iphone7}></img>
          <h1 className='text-zinc-600 pl-2'>iphone 14</h1>
          <h4 className='text-sm pb-1 text-zinc-400'>512GB Capacity</h4>
          <h4 className='text-sm pb-1 text-zinc-400'>6.1‑inch screen</h4>
          <h4 className='text-sm pb-1 text-zinc-400'>5‑core GPU</h4>
        </div>
    </div>

    <div className='text-center my-8'>
      <h1 className='text-zinc-700'>About us</h1>
      <p className='text-zinc-400 w-10/12 mx-auto'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus.
      </p>
    </div>

    </div>
  )
}

export default Card1