import React, { useState } from 'react'
import './Specials.css'
export default function Specials(props) {
    const totspls=props.data.length;
    const [splsquan,setsplsquan]=useState(0);
    const [spllimit,setspllimit]=useState("left1b");
    const [spllimit1,setspllimit1]=useState("right1");
    const [splbutstyle,setsplbutstyle]=useState({
        width: "18vw",
        backgroundColor:"rgba(23,26,41,255)",
        border: "0",
        cursor: "pointer",
        marginRight: "3vw"
    });
    function slide(a,b){
        var g=splsquan;
        if(a===1 && b!==0){
            var t=(b-1)*(-21);
            g=b-1;
            setsplbutstyle({
                width: "18vw",
        backgroundColor:"rgba(23,26,41,255)",
        border: "0",
        cursor: "pointer",
        marginRight: "3vw",
        position:"relative",
        left:(t.toString()+"vw"),
        transition:"left 0.5s"
            })
        setsplsquan(h=>h-1);
        }
        else if(a===2 && (b+1)<totspls){
            var t1=(b+1)*(-21);
            g=b+1;
            setsplbutstyle({
                width: "18vw",
        backgroundColor:"rgba(23,26,41,255)",
        border: "0",
        cursor: "pointer",
        marginRight: "3vw",
        position:"relative",
        left:(t1.toString()+"vw"),
        transition:"left 0.5s"
            })
        setsplsquan(h=>h+1);
        }
        if(g===totspls-4)
        setspllimit1("right1b");
        else
        setspllimit1("right1");

        if(g===0)
        setspllimit("left1b");
        else
        setspllimit("left1");
    }
    return (
        <div className='spls'>
            <button className={spllimit} type='button' onClick={()=>slide(1,splsquan)}><div className='left'>&#8592;</div></button>
            <div className='splmain'>
                {
                    props.data.map((e)=>(
                        <button className='tgd1' type='button' style={splbutstyle}><img className='splimg' src={e.image} alt="..." /></button>       
                    ))
                }
            </div>
            <button className={spllimit1} onClick={()=>slide(2,splsquan)}><div className='right'>&#8594;</div></button>
        </div>
    )
}
