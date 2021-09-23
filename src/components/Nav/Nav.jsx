import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar.jsx';

import './Nav.css';
import "animate.css"


function Nav({onSearch}) {
  
  
  const navLinks = useRef()
  const about = useRef()
 
  const linksl = useRef()
  const linksh = useRef()
  const linksa = useRef()
  
  const burg = useRef()
  const line1 = useRef()
  const line2 = useRef()
  const line3 = useRef()

  return (
    <nav className="navbar">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={`images/icons/Logo.svg`} width="200" className="d-inline-block align-top" alt="home" />
        </span>
      </Link>
      <SearchBar
        onSearch={onSearch} className='searchb'
      />
      <Link to='/about' style={{ textDecoration: 'none' }} onMouseEnter={() => about.current.classList.toggle('hover')} onMouseLeave={() => about.current.classList.remove('hover')}>
        <span ref={about} className="about" >About</span>
      </Link>
      <div className='burguer' ref={burg} onClick={() => {
          navLinks.current.classList.toggle('open');
          linksa.current.classList.toggle('fade')
          linksl.current.classList.toggle('fade')
          linksh.current.classList.toggle('fade')
          line2.current.classList.toggle('open')
          line1.current.classList.toggle('open')
          line3.current.classList.toggle('open')
          burg.current.classList.toggle('open')
        }}>
        <div className='line1' ref={line1}></div>
        <div className='line2' ref={line2}></div>
        <div className='line3' ref={line3}></div>
      </div>
      <ul className='nav-links' ref={navLinks}>

        <NavLink exact to='/' activeClassName='active' style={{ textDecoration: 'none' }} onClick={() => {
          navLinks.current.classList.remove('open');
          linksa.current.classList.remove('fade')
          linksl.current.classList.remove('fade')
          linksh.current.classList.remove('fade')
          line2.current.classList.remove('open')
          line1.current.classList.remove('open')
          line3.current.classList.remove('open')
          burg.current.classList.remove('open')
        }}>
          <li ref={linksh}> Home </li> 
        </NavLink>
        <NavLink exact to='/about' activeClassName='active' style={{ textDecoration: 'none' }} onClick={() => {
          navLinks.current.classList.remove('open');
          linksa.current.classList.remove('fade')
          linksl.current.classList.remove('fade')
          linksh.current.classList.remove('fade')
          line2.current.classList.remove('open')
          line1.current.classList.remove('open')
          line3.current.classList.remove('open')
          burg.current.classList.remove('open')
        }}>
          <li ref={linksa} > About </li>
        </NavLink>
        <NavLink exact to='/list' activeClassName='active' style={{ textDecoration: 'none' }} onClick={() => {
          navLinks.current.classList.remove('open');
          linksa.current.classList.remove('fade')
          linksl.current.classList.remove('fade')
          linksh.current.classList.remove('fade')
          line2.current.classList.remove('open')
          line1.current.classList.remove('open')
          line3.current.classList.remove('open')
          burg.current.classList.remove('open')
        }}>
          <li ref={linksl}> List </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;





