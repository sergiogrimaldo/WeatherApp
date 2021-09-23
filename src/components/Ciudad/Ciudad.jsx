import React, { useRef } from "react";
import { useHistory } from 'react-router-dom';

import countrys from '../../countrys.json'
import dia from '../images/fdia.svg'
import noche from '../images/fnoche.svg'
import nublado from '../images/fnublado.svg'

import './Ciudad.css'
import '../CartaP/CartaP.css';
import "animate.css"
import "../Error404.css"

import humidity from '../images/icons/humidity.svg'
import d01 from '../images/icons/01d.svg'
import n01 from '../images/icons/01n.svg'
import d02 from '../images/icons/02d.svg'
import n02 from '../images/icons/02n.svg'
import d03 from '../images/icons/03d.svg'
import n03 from '../images/icons/03n.svg'
import d04 from '../images/icons/04d.svg'
import n04 from '../images/icons/04n.svg'
import d09 from '../images/icons/09d.svg'
import n09 from '../images/icons/09n.svg'
import d10 from '../images/icons/10d.svg'
import n10 from '../images/icons/10n.svg'
import d11 from '../images/icons/11d.svg'
import n11 from '../images/icons/11n.svg'
import d13 from '../images/icons/13d.svg'
import n13 from '../images/icons/13n.svg'
import d50 from '../images/icons/50d.svg'
import n50 from '../images/icons/50n.svg'



export default function Ciudad({city}) {

    const front = useRef();
    const back = useRef()
    
    let history = useHistory();

    if(city.length){
        var myDate = new Date( (city[0].dt + city[0].timezone) *1000);
        var hora;
      
        if(city[0].timezone > 0 ) {hora = '+' + city[0].timezone/3600} 
        else {hora = city[0].timezone/3600}
         
      
        let direc = ''
        if(city[0].img.includes('d')){
          if(city[0].img === '09d' || city[0].img === '10d' || city[0].img === '11d'){direc = nublado}
          else {direc = dia} } else {direc = noche }
      
        let colortext = ''
        let backColor = ''
        let col = ''
        if(city[0].img.includes('d')){colortext = 'rgba(12, 130, 167, 1)'; backColor= 'rgba(204, 234, 222, 1)'; col = 'day' }
        else {colortext = 'rgba(255, 255, 255, 1)'; backColor= 'rgba(60, 54, 76, 1)'; col = 'night'} 

        var img;
       
        switch(city[0].img){
            case '01d':
                img = d01;
                break;
            case '01n':
                img = n01;
                break;
            case '02d':
                img = d02;
                break;
            case '02n':
                img = n02;
                break;
            case '03d':
                img = d03;
                break;
            case '03n':
                img = n03;
                break;
            case '04d':
                img = d04;
                break;
            case '04n':
                img = n04;
                break;
            case '09d':
                img = d09;
                break;
            case '09n':
                img = n09;
                break;
            case '10d':
                img = d10;
                break;
            case '10n':
                img = n10;
                break;
            case '11d':
                img = d11;
                break;
            case '11n':
                img = n11;
                break;
            case '13d':
                img = d13;
                break;
            case '13n':
                img = n13;
                break;
            case '50d':
                img = d50;
                break;
            case '50n':
                img = n50;
                break;          
            default: 
        }


        return (
        <div className='container middle'> 


            <button className='exit animate__animated animate__fadeIn' onClick={() => history.goBack()} style={{ outline: 'none' }}>
                <p style={{ color: 'black'}} className='exit'><i className="fas fa-arrow-left fast"></i> <p className='bklink'>Back</p></p>
            </button>


            <div className="carta front" ref={front} style={{ backgroundImage: `url(${direc})` }}
             onClick={() => {
                 const list = back.current.classList
                 if(list.contains('rotate')){
                    front.current.classList.remove('rotate')
                    back.current.classList.remove('rotate')
                 } else {
                    front.current.classList.toggle('rotate')
                    back.current.classList.toggle('rotate')
                 }
            }}>
                
                <div className='iconoP'>
                  <img src={`${img}`} style={{ width: '215px' }} alt={`${city[0].description}`} />
                </div>     
        
                <div className="cityinfo">
                    <div className='temperaturaP'>
                        <p className='tempP' style={{ color: `${colortext}`  }}>{city[0].temp}°</p>
                    </div>
                    <div className="cityfecha">
                        
                        <h5 className="card-titleP" style={{ color: `${colortext}`  }}>{city[0].name}</h5>    
                        
                        <div>
                            <p className='fecha' style={{ color: `${colortext}`  }}>{myDate.toGMTString() + hora}</p>
                        </div>
                    </div>  
                </div>
        
                <div className='infoP'>
                    <div className='espacP'>
                        <p className='textoinfoP' style={{ color: `${colortext}`  }}>Wind</p>
                        <p className='infoinfoP' style={{ color: `${colortext}`  }}>{city[0].wind} m/s</p>
                    </div>
                    <div className='espacP'>
                        <p className='textoinfoP' style={{ color: `${colortext}`  }}>Humidity</p>
                        <p className='infoinfoP' style={{ color: `${colortext}`  }}>{city[0].humidity}%</p>
                    </div>
                    <div className='espacP'>
                        <p className='textoinfoP' style={{ color: `${colortext}`  }}>Pressure</p>
                        <p className='infoinfoP' style={{ color: `${colortext}`  }}>{city[0].pressure}hPa</p>
                    </div>
                </div>
            </div>



            <div className='back' ref={back} style={{ backgroundColor: `${backColor}` }}
            onClick={() => {
                const list = back.current.classList
                if(list.contains('rotate')){
                   front.current.classList.remove('rotate')
                   back.current.classList.remove('rotate')
                } else {
                   front.current.classList.toggle('rotate')
                   back.current.classList.toggle('rotate')
                }
           }}>
              <div className='cityplus'>
                  <div className='infoplus'>
                    <p className='textoinfocity' style={{ color: `${colortext}`  }}>City name:</p>
                    <p className='infoinfocity' style={{ color: `${colortext}`  }}>{city[0].name}</p>
                  </div>
                  <div className='infoplus'>
                    <p className='textoinfocity' style={{ color: `${colortext}`  }}>Country:</p>
                    <p className='infoinfocity' style={{ color: `${colortext}`  }}>
                    <img
                        src={`https://flagcdn.com/28x21/${city[0].country.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/56x42/${city[0].country.toLowerCase()}.png 2x,
                            https://flagcdn.com/84x63/${city[0].country.toLowerCase()}.png 3x`}
                        width="28"
                        height="21"
                        alt={`${countrys[city[0].country.toLowerCase()]}`} />  {countrys[city[0].country.toLowerCase()]}</p>
                  </div>
              </div>
              <div className='otrosDatos' style={{ color: `${colortext}`  }}>
                  <div className='infoplus'>
                    <p className='textoinfoplus' style={{ color: `${colortext}`  }}><i className="fas fa-cloud-sun"></i> Weather:</p>
                    <p className='infoinfoplus' style={{ color: `${colortext}`  }}>{city[0].description}</p>
                  </div>
                  <div className='infoplus'>
                    <p className='textoinfoplus' style={{ color: `${colortext}`  }}><i className="fas fa-thermometer-half"></i> Feels like:</p>
                    <p className='infoinfoplus' style={{ color: `${colortext}`  }}>{city[0].feelsLike}°</p>
                  </div>
                  <div className='infoplus'>
                    <p className='textoinfoplus' style={{ color: `${colortext}`  }}><i className="far fa-eye"></i> Visibillity:</p>
                    <p className='infoinfoplus' style={{ color: `${colortext}`  }}>{city[0].visibility / 1000} km</p>
                  </div>
                  <div className='infoplus'>
                    <p className='textoinfoplus' style={{ color: `${colortext}`  }}><i className="fas fa-wind"></i> Wind:</p>
                    <p className='infoinfoplus' style={{ color: `${colortext}`  }}>{city[0].wind} m/s</p>
                  </div>
                  <div className='infoplus'>
                    <p className='textoinfoplus' style={{ color: `${colortext}`  }}><img src={`${humidity}`} style={{ width: '22px' }} className={`filter-${col}`} alt="" /> Humidity:</p>
                    <p className='infoinfoplus' style={{ color: `${colortext}`  }}>{city[0].humidity}%</p>
                  </div>
                  <div className='infoplus'>
                    <p className='textoinfoplus' style={{ color: `${colortext}`  }}><i className="fas fa-tachometer-alt"></i> Pressure:</p>
                    <p className='infoinfoplus' style={{ color: `${colortext}`  }}>{city[0].pressure}hPa</p>
                  </div>
                  <div className='infoplus'>
                    <p className='textoinfoplus' style={{ color: `${colortext}`  }}><i className="fas fa-cloud"></i> Cloudiness:</p>
                    <p className='infoinfoplus' style={{ color: `${colortext}`  }}> {city[0].clouds}%</p>
                  </div>
              </div> 
            </div>
        </div> 
        )
    } else {
        return(
          <div className='errorcity'>
              <img src={`${n01}`} className='errorMoon' alt='error moon'/>
              <p className='errormsg'><span className='span404'>4 4</span>City not found</p>
          </div>
        )
    }
    
}


