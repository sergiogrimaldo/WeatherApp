import React, { useRef }  from 'react';
import { Link } from 'react-router-dom'

import './CartaP.css';
import "animate.css"

import dia from '../images/fdia.svg'
import noche from '../images/fnoche.svg'
import nublado from '../images/fnublado.svg'



export default function CartaP ({ name, img, onClose, id, wind, temp, dt, timezone, humidity, pressure}) {
  var myDate = new Date( (dt + timezone) *1000);
  var hora;

  const titulo = useRef()

  if(timezone > 0 ) {hora = '+' + timezone/3600} 
  else {hora = timezone/3600}
   

  let direc = ''
  if(img.includes('d')){
    if(img === '09d' || img === '10d' || img === '11d'){direc = nublado}
    else {direc = dia} } else {direc = noche }

  let colortext = ''
  if(img.includes('d')){colortext = 'rgba(12, 130, 167, 1)' }
  else {colortext = 'rgba(255, 255, 255, 1)'} 

    if(name){ 
      return (
        <div className="carta animate__animated animate__flipInX"  style={{ backgroundImage: `url(${direc})` }}>
            <div id="closeeIcon" className="row">
                  <button onClick={onClose} className="btn btn-sm btn-card btn-danger">X</button>  
            </div>
            <div className='iconoP'>
              <img src={`images/icons/${img}.svg`} style={{ width: '215px' }} alt="" />
            </div>     
  
            <div className="cityinfo">
                <div className='temperaturaP'>
                  <p className='tempP' style={{ color: `${colortext}`  }}>{temp}°</p>
                </div>
                <div className="cityfecha">
                  <Link to={`/ciudad/${id}`} className="card-titleP" style={{ textDecoration: 'none' }} >
                    <h5 className="card-titleP" ref={titulo} onMouseEnter={() => titulo.current.classList.toggle('hover')} onMouseLeave={() => titulo.current.classList.remove('hover')} style={{ color: `${colortext}`  }}>{name}</h5>    
                  </Link>
                  <div>
                      <p className='fecha' style={{ color: `${colortext}`  }}>{myDate.toGMTString() + hora}</p>
                  </div>
                </div>  
            </div>
  
            <div className='infoP'>
                <div className='espacP'>
                    <p className='textoinfoP' style={{ color: `${colortext}`  }}>Wind</p>
                    <p className='infoinfoP' style={{ color: `${colortext}`  }}>{wind} m/s</p>
                </div>
                <div className='espacP'>
                    <p className='textoinfoP' style={{ color: `${colortext}`  }}>Humidity</p>
                    <p className='infoinfoP' style={{ color: `${colortext}`  }}>{humidity}%</p>
                </div>
                <div className='espacP'>
                    <p className='textoinfoP' style={{ color: `${colortext}`  }}>Pressure</p>
                    <p className='infoinfoP' style={{ color: `${colortext}`  }}>{pressure}hPa</p>
                </div>
            </div>
        </div>
      );
    } else {
      return <div> </div>
    }
    
};

