import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import useMedia from 'use-media';

import './SearchBar.css'




export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');

  const mobile = useMedia({maxWidth: '768px'});

  const onButtonClick = (e) => {
    e.preventDefault();

    if(city !== '') {
      onSearch(city)
      setCity('')
      if(!mobile) {history.push('/')}
    }
   }
   
   const search = useRef()
   const box = useRef()
   const history = useHistory()
   

  return (
    <div className="search-box" ref={box} onMouseEnter={ () => {
      if(!mobile) search.current.classList.toggle('open')
      }} onMouseLeave={ () => {
        if(!mobile) search.current.classList.remove('open')}}>
      <form  onSubmit={onButtonClick}>
        <input 
          className="search-txt"
          type="text" 
          placeholder="Search City..."
          value = {city}
          ref = {search}
          onChange={e => setCity(e.target.value)}
        />
        
        <button type="submit" className="search-btn" onClick={() => {
          if(mobile) search.current.classList.toggle('open')
        }}  style={{ outline: 'none' }}>
          <i className="fas fa-search" ></i>
        </button>      
      </form>
    </div>
  );
}

