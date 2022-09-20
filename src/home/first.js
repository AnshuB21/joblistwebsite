import React from "react";
import {Link} from 'react-router-dom';
function Fisrt(){
    return <div className='initial' >
    <div className='initialdiv'>
        <span className='smalldiv' style={{position:'absolute',top:'12rem',left:'8rem'}}>
      <h1 style={{color:'white'}}>Donate</h1>
      <h3 style={{color:' hsl(205, 78%, 60%)'}}>For a better world</h3>
      <p style={{color:'white'}}>Every child has a right to education and to know their all human rights</p>
      <section style={{display:'flex',width:'80vw'}}>
      <Link to='/contact' className='linkbtn'> Click to help</Link>
      <Link to='/about' className='second'style={{backgroundColor:' hsl(205, 78%, 60%)',color:' black',margin:'0 6px',borderRadius:'0.7rem',padding:'0.7rem 0 0 0',textAlign:'center',width:'10rem'}}>Learn about us</Link>
      <div>.</div>
    </section></span>
    </div>
    <span></span>
  </div>
}
export default Fisrt;