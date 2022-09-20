import React from "react";
import {BiDonateHeart} from 'react-icons/bi';
import{GrGroup} from 'react-icons/gr';
function Second(){
    return(
<div className="secondpart" style={{height:'20rem',marginTop:'0',marginBottom:'0',paddingBottom:'0'}}>
<div style={{marginLeft:'1.2rem',marginRight:'1.9rem',marginTop:'0'}}><img src='./Image/log.jpeg' alt='error' style={{height:'16rem'}}/>
</div>
<div style={{wordWrap: 'break-word',textAlign: 'justify',width:'18.2rem',height:'16rem'}}>
    <div style={{fontSize:'3rem',marginLeft:'6.9rem',borderBottom:'0.4rem solid hsl(205,78%,60%)',width:'3rem'}}><GrGroup/></div>
<h3 style={{marginLeft:'5rem',fontSize:'1.5rem'}}>Awarness</h3>
<p>Has been working on serving help for many years. Our team was oficially lauched in 2021 with all lawful 
     
</p>
</div>
<div style={{height:'16rem',marginLeft:'1.6rem',width:'18.2rem'}}>
    <div style={{fontSize:'3rem',marginLeft:'5rem',borderBottom:'0.4rem solid hsl(205,78%,60%)',width:'3rem'}}><BiDonateHeart/></div>
    <h3 style={{marginLeft:'3.1rem',fontSize:'1.5rem'}}>Donation</h3>
    <p>Your little help can make great changes on life of someone who isn't as privilage as we are. Raise your helping hands</p>
</div>
</div>
)}
export default Second;