import React from 'react'
import './DetCard.css'
export default function DetCard(props) {
  return (
    <div className='detc'>
        <div className='num'>{props.num}</div>
        <img className='cardimg' src={props.img} alt="..."/>
        <p className='mt'>{props.maincap}</p>
        <p className='sect'>{props.secap}</p>
    </div>
  )
}
