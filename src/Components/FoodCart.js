import React from 'react'
import './FoodCart.css'
import NavBar from './NavBar'
import Footer from './Footer'
export default function FoodCart() {
  return (
    <div className='mfc'>
      <NavBar/>
      <div className='cartprodsandsubtotal'>
        <div className='cartprods'>
                      
        </div>
        <div className='subtotal'>

        </div>
      </div>
      <Footer/>
    </div>
  )
}
