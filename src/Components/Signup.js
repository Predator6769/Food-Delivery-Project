import React from 'react'
import bgm from './bgnavimg.jpeg'
import Footer from './Footer'
import './Signup.css'
export default function Signup() {
  return (
    <>
    <div className='msu'>
      <img className='bgim' src={bgm} alt="..." />
      <div className='siform'>
      </div>
      <div className='siformdets'>
        <p className='sititle'>Sign in Here</p>
        <p className='fre'>please enter a valid username!</p>
        <input type='text' className='in' placeholder='username' id="eee"/>
        <p><input type='password' placeholder='password' className='in' /></p>
        <p><input type='email' placeholder='email' className='in' /></p>
        <button className='sibut' type='button'>SIGN UP</button>
      </div>
    </div>
    <Footer/>
    </>
  )
}
