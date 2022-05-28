import React from 'react'
import './Footer.css'
import logo from './mainlogo.png'
import fb from './fbicon.png'
import insta from './instaicon.png'
import twit from './twittericon.png'
import pin from './pinteresticon.png' 
export default function Footer() {
    return (
        <div className='fmai'>
            {/* <hr className='hgrt' /> */}
            <div className='tygh'>
                <div className='tre'>
                <img className='tyg' src={logo} alt="..." />
                <span className='ftitle'>Quick Food</span>
                </div>
                <p className='copyrights'>&#169; 2022 Quick Food</p>
                <div className='sshare'>
                    <button className='fgrwq' type='button'><img className='fb' src={fb} alt="..."/></button>
                    <button className='fgrwq' type='button'><img className='insta fb' src={insta} alt="..."/></button>
                    <button className='fgrwq' type='button'><img className='twitter fb' src={twit} alt="..."/></button>
                    <button className='fgrwq' type='button'><img className='pinterest fb' src={pin} alt="..."/></button>
                </div>
            </div>
        </div>
    )
}
