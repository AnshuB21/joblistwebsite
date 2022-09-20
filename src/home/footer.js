import React from "react";
import {social} from '../Navbar/data';
import{FaRegCopyright} from 'react-icons/fa'
function Footer(){
    return <div style={{backgroundColor:'hsl(205, 78%, 60%)',height:'12rem',position:'relative'}}> 
    <ul className='footer-icons'>
    {social.map((socialIcon) => {
      const { id, url, icon } = socialIcon;
      return (
        <li key={id}>
          <a href={url}>{icon}</a>
        </li>
      );
    })}
  </ul>
  <span style={{margin:'auto',color:'white',fontSize:'1.2rem',display:'flex',justifyContent:'center'}}>
    <FaRegCopyright style={{color:'white'}}/>
 <h4>/gfjvfhfjufyuf</h4>
  </span>
  </div>
}
export default Footer;