import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { decrease, increase, remove } from '../Redux/Cartslice'
function CartChecout({cartitem}) {
    const dispatch= useDispatch()
    const {name, img, price, amount}= cartitem
  return (
    <div className='flex  justify-between items-center m-2'>
        <img src={img} className='w-[100px] rounded-full h-[100px] object-cover' alt="" />
        <div className=''>
            <h3 className='text-2xl font-bold'>{name}</h3>
            <span className='font-semibold'>${price}</span>
        </div>
        <div>
            <button onClick={()=>dispatch(decrease(cartitem))} className='bg-black text-white h-8 w-8 rounded-full text-xl'>-</button>
            <button className='text-2xl px-2'>{amount}</button>
            <button onClick={()=>dispatch(increase(cartitem))} className='bg-black text-white h-8 w-8 rounded-full text-xl'>+</button>
        </div>
        <div className='font-bold'>
            Total
            <div>{(price * amount).toFixed(2)}</div>
        </div>
        <div className='font-bold cursor-pointer'><AiOutlineClose onClick={()=> dispatch(remove(cartitem))} size={30}/></div>
    </div>
  )
}

export default CartChecout