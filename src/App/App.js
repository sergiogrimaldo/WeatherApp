import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import { useRef } from 'react';
import useMedia from 'use-media';

import Cards from '../components/Cards/Cards.jsx';
import Nav from '../components/Nav/Nav.jsx'
import About from '../components/About/About.jsx'
import Ciudad from '../components/Ciudad/Ciudad.jsx'
import List from '../components/List/List.jsx'
import swal from 'sweetalert';

import './App.css';
import '../components/Alert.css'


export default function App() {
  const [cities, setCities] = useState([]);

  const cityadd = useRef()
  const mobile = useMedia({maxWidth: '768px'});


  function onSearch(ciudad) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=en&appid=f39f8244f4ecbb533c4bb3b2757e8589&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          temp: recurso.main.temp,
          feelsLike: recurso.main.feels_like,
          name: recurso.name,
          country: recurso.sys.country,
          weather: recurso.weather[0].main,
          description: recurso.weather[0].description,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon,
          wind: recurso.wind.speed,
          humidity: recurso.main.humidity,
          pressure: recurso.main.pressure,
          visibility: recurso.visibility,
          dt: recurso.dt,
          timezone: recurso.timezone
        }; 

        let index = cities.findIndex(el => el.id === ciudad.id)

        if(index === -1){

          if(mobile){
            cityadd.current.style.display = 'inline'
            cityadd.current.classList.toggle("show")
            cityadd.current.classList.remove("hidecity")
            cityadd.current.classList.toggle("showAlert")
            setTimeout(function(){
              cityadd.current.classList.remove("show")
              cityadd.current.classList.toggle("hidecity")
              setTimeout(function(){
                cityadd.current.classList.remove("showAlert")
                cityadd.current.style.display = 'none'
              },1000);
            },2500);
          }
          
          setCities(oldCities => [ciudad, ...oldCities]);
        }
      } else {
        swal("City not found!", "", "error");
      }
    });

  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  
  return (
    <div className="App">
      
      <Nav onSearch={onSearch} />
      <div className="cityadded">
        <div className="alertcity hidecity" ref={cityadd}>
            <span className="fas fa-check-circle"></span>
            <span className="msgcity">City added successfully!</span>
              <div className="close-btn" onClick={() => {
                 cityadd.current.classList.remove("show")
                 cityadd.current.classList.toggle("hidecity")
                 setTimeout(function(){
                   cityadd.current.classList.remove("showAlert")
                   cityadd.current.style.display = 'none'
                 },1000);
              }}>
                <span className="fas fa-times"></span>
            </div>
        </div>
      </div>
      <Switch>
        <Route
          exact path='/'
          render={() => <Cards cities={cities} onClose = {onClose}  />}
        />
        <Route
          exact path='/about'
          component={About}
        />
        <Route
        exact path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad
            city={cities.filter(c => c.id === parseInt(match.params.ciudadId))}/>}
        />
        <Route
          exact path='/list'
          render={() => <List cities={cities} onClose = {onClose}  />}
        />
      </Switch> 
    </div>
  );
}
