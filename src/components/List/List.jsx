import React from 'react';

import Card from '../Card/Card.jsx';

import '../Cards/Cards.css';
import '../container.css'
import './List.css'


export default function Cards({cities, onClose}) {
    if(cities.length){
      return (
      <div className='container'>
        <div className='cardsmob'>
          {cities.map(c => <Card
              key={c.id + c.name}
              name={c.name}
              img={c.img}
              onClose={() => onClose(c.id)}
              id={c.id}
              temp={c.temp}
              wind={c.wind}
              humidity={c.humidity}
              pressure={c.pressure}
            /> )}
        </div>
      </div>
      );
    } else {
      return(
        <div></div>
      )
    }
  }