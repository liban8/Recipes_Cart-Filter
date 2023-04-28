import React from 'react'
import { BsCartFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Cartslice';
function FoodShope({items}) {
 const {name, img, price} = items;
 const dispatch  = useDispatch()
 
  return (
  
     <div className='h-[400px] relative' style={{
      background:  `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.8)),url(${img})`,
      backgroundSize:'cover',
      backgroundPosition:"center",
      objectFit:"cover"
    }}>
    <div className='text-white absolute bottom-0 left-0 flex w-full justify-between p-5'>
      <h3 className='text-2xl font-bold'>{name}</h3>
      <span className='text-2xl font-black font-serif'>${price}</span>
    </div>
    <button className='bg-orange-500 rounded-full  text-white m-2 p-2 '><BsCartFill size={30}  onClick={()=> dispatch(add(items))}/> </button>
    </div>
  
  )
}

export default FoodShope