import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCartFill } from 'react-icons/bs'
import {  useDispatch, useSelector } from 'react-redux'

function Navbar() {
  const dispatch = useDispatch()
const {amount} = useSelector((state) => state.cart)
  return (
    <div className='w-screen flex items-center justify-between p-4 text-3xl font-bold shadow-xl'>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="Cart" className="flex relative bg-orange-500 px-3 py-1 rounded-lg text-white"><BsCartFill  /><span className='text-2xl '>{amount}</span> </NavLink>
    </div>
  )
}

export default Navbar