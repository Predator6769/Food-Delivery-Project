import React from 'react'
import './ProductCard.css'
export default function ProductCard(props) {
  return (
    <div className='pmui'>
      {props.data.map((g) => (<div className='ftg'>
        <button className='fer' type='button'>
          <div className='tyr4'>
          </div>
          <p className='atc5'>Click to add to cart</p>
          <img className='rtf1' src={g.image} alt="..." />
          <div className='sedf'>
            <p className='mt1'>{g.title}</p>
            <p className='typeres'>{g.desc}</p>
            <p className='rating'><span className={(g.rating >= 4) ? ('grr') : ('orr')}>&#9733; {g.rating}</span><p>&nbsp;&nbsp;&nbsp;.&#9202;{g.deltime} .&nbsp;&nbsp;</p><p>₹ {g.price} .</p></p>
          </div>
        </button>
      </div>))}
    </div>
  );
}
