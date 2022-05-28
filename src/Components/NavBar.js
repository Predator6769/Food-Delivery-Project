import React, { useState } from 'react'
import './NavBar.css'
import ml from './mainlogo.png'
import mbg from './bgnavimg.jpeg'
import simg from './simg.JPG'
import atc from './atc.png'
import gfd from './hamburgerbuttonimg.png'
// import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

export default function NavBar(props) {
    const [hammenustyleclass,sethammenustyleclass]=useState("navmenu2");
    const hamclick=()=>{
        if(hammenustyleclass==="navmenu2" || hammenustyleclass==="navmenu2close")
        sethammenustyleclass("navmenu2open");
        else
        sethammenustyleclass("navmenu2close");
    }
    // const sistate=useSelector(state=>state.sistate)
    // console.log(sistate)
    const handlescroll=()=>{
        window.scrollTo(0,1550);
    }

    return (
        <div className='mainnav'>
            <img className='mbg' src={mbg} alt="..." />
            <div className='mnav1'>
            <img className='mlogo' src={ml} alt="..." />
            <p className='mtitle'>Quick Food</p>
            <div className='navmenu'>
                <Link to="/"><button className='navbuts' type='button'>Home</button></Link>
                <button className='navbuts' type='button' onClick={handlescroll}>Restaurants</button>
                <button className='navbuts' type='button'>About Us</button>
                <Link to="/login"><button className='navbuts' type='button' >Login</button></Link>
                <Link to="/signup"><button className='navbuts' type='button' >Sign Up</button></Link>
                <Link to="/cart"><button className='navbuts uytr' type='button'><img className='atcim' src={atc} alt="..." /><div className='atcq'>0</div></button></Link>
                <button className='ham' type='button' onClick={hamclick}><img className='yr' src={gfd} alt="..."/></button>  
            </div>
            <div className={hammenustyleclass}>
                <Link to="/"><button className='navbuts2' type='button'>Home</button></Link>
                <button className='navbuts2' type='button' onClick={handlescroll}>Restaurants</button>
                <button className='navbuts2' type='button'>About Us</button>
                <Link to="/login"><button className='navbuts2' type='button' >Login</button></Link>
                <Link to="/signup"><button className='navbuts2' type='button' >Sign Up</button></Link>
                <Link to="/cart"><button className='navbuts2' type='button'><img className='atcim' src={atc} alt="..." /><div className='atcq'>0</div></button></Link>
                <button className='ham2' type='button' onClick={hamclick}><img className='yr' src={gfd} alt="..."/></button>
            </div>
            </div>
            <div className='search'>
                <p className='cap'>Order Takeaway or Delivery Food</p>
                <div className='ser'>
                    <input className='searchinp' type='text' placeholder='Search your tastes' />
                    <button className='sb' type='button'><img className='sbi' src={simg} alt="..." /></button>
                </div>
            </div>
            <div className='tgf'>
                <p className='sdets'><span>10</span> Restaurants<span> 3</span> Registered users</p>
            </div>
        </div>
    )
}