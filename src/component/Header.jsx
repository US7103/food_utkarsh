import React, { useState } from 'react'
import Cart from './Cart'

const Header = ({onCartClick,count}) => {
  
  
  

  return (
    <div className=' justify-around flex w-full bg-emerald-800 text-white text-xl'>
    <div className=' flex flex-row'>
    <h1 className=' mt-6'>Always For You & with You!</h1>
    <img className=' h-[70px]' src='public/delboy.svg'/>
    <h1 className=' mt-6'>The Utkarsh Kitchen</h1>
    
    </div>
    <div className=' mt-4 flex flex-row'>
    <img onClick={<Cart onClick={onCartClick} count={count} />} className=' h-[32px]' src='Card-1.svg'/>
    <h1>{count}</h1>
    <img className=' mx-5 h-[32px]' src='Card.svg'/>
    </div>
    </div>
  )
}


export default Header
 