import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import useMedia from 'use-media';

import './Card.css';
import "animate.css"


export default function Card ({ name, img, onClose, id ,temp ,wind ,humidity ,pressure, nmro}) {

  let color = ''
  let colortext = ''
  if(img.includes('d')){color = 'rgba(139, 217, 254, 1)' ; colortext = 'rgba(12, 130, 167, 1)' }
  else {color = 'rgba(43, 38, 58, 1)' ; colortext = 'rgba(255, 255, 255, 1)'} 

  const tit= useRef()
  const imgC = useRef()

  const isWide = useMedia({maxWidth: '768px'});

  if(imgC.current){
     if(isWide) imgC.current.style.height = '160px'
     else imgC.current.style.height = '170px'
  }
  
  
    return (
      <div className="card animate__animated animate__flipInX" style={{ backgroundColor: `${color}`  }}>
        <div className='encabezado'>
           <div id="closeIcon" className="row">
              <button onClick={onClose} className="btn btn-sm btn-card btn-danger">X</button>  
           </div>
           <Link to={`/ciudad/${id}`} className="card-title" style={{ textDecoration: 'none' }} onMouseEnter={() => tit.current.classList.toggle('hoverr')} onMouseLeave={() => tit.current.classList.remove('hoverr')}>
             <h5 className="card-title" ref={tit} style={{ color: `${colortext}`  }}>{name}</h5>
           </Link>
        </div>
        <div className='icono'>
          <img className="iconoClima" ref={imgC} src={`images/icons/${img}.svg`} alt="" style={{ height: '160px' }}/>
        </div>     
      
      <div className='temperatura'>
         <p className='temp' style={{ color: `${colortext}`  }}>{temp}°</p>
      </div>
      <div className='info'>
         <div className='espac'>
            <p className='textoinfo' style={{ color: `${colortext}`  }}>Wind</p>
            <p className='infoinfo' style={{ color: `${colortext}`  }}>{wind} m/s</p>
         </div>
         <div className='espac'>
            <p className='textoinfo' style={{ color: `${colortext}`  }}>Humidity</p>
            <p className='infoinfo' style={{ color: `${colortext}`  }}>{humidity}%</p>
         </div>
         <div className='espac'>
            <p className='textoinfo' style={{ color: `${colortext}`  }}>Pressure</p>
            <p className='infoinfo' style={{ color: `${colortext}`  }}>{pressure}hPa</p>
         </div>
      </div>
    </div>
    );
};

