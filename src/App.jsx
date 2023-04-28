import React, { useEffect } from 'react'
import Navbar from './page/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Cart from './page/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { total } from './Redux/Cartslice'

function App() {
  const dispatch = useDispatch();
  const {carItems} = useSelector(state => state.cart)
  useEffect(()=>{
    dispatch(total())
  }, [carItems])
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App