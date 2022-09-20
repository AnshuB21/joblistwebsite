import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import {Link} from 'react-router-dom';
// Img from '../Image/logo.jpeg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav >
      <div className='nav-center'>
     
        <div className='nav-header'>
          <div style={{display:'flex'}}>
            <img style ={{height:'2.2rem'}} src='./Image/log.jpeg'alt='error'/>
          <h3 style={{color:'  hsl(205, 78%, 60%)', fontWeight:'bold',textShadow:'1px 1px #ccc'}}>Prayas Foundtion </h3>
        </div>
          <button className={`${showLinks?'nav-toggle active': 'nav-toggle'}`} onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container'ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                 <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
