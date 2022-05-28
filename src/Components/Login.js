import React from 'react'
import bgm from './bgnavimg.jpeg'
import Footer from './Footer'
import './Signup.css'
export default function Login() {
  return (
    <>
      <div className='msu'>
        <img className='bgim' src={bgm} alt="..." />
        <div className='siform'>
        </div>
        <div className='siformdets'>
          <p className='sititle'>Login Here</p>
          <p className='fre'>please enter a valid username!</p>
          <input type='email' className='in' placeholder='email' id="eee" />
          <p><input type='password' placeholder='password' className='in' /></p>
          <button className='sibut' type='button'>LOGIN</button>
        </div>
      </div>
      <Footer />
    </>
  )
}
