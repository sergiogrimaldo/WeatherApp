import './About.css'
import portrait from '../images/foto.jpg'
import { useRef } from 'react'

export default function About() {

    const github = useRef()
    const linked = useRef()
    
    return (
      <div className="allabout">
        <div className="contentabt">
            <aside className="sideabt">
              <figure className="picture">
                <div className="picture-shadow"></div>

                <img id="pictureImage" className="picture-image"
                src={`${portrait}`}
                alt="Portrait"
                width="318"
                height="318" />
              </figure>
            </aside>
            <main className="aboutabt">
              <h1 className="nameabt">
                Hi, I'm Sergio Grimaldo
              </h1>
              <p className="jobabt">
                Full Stack Developer Student
              </p>
              <hr className="hrnashe"></hr>
              <div className="contactabt">
                <ul className="social" style={{ listStyleType: 'none' }}>
                  <li>
                    <a href="https://github.com/sergiogrimaldo" style={{ textDecoration: 'none', color: 'black' }} rel="noreferrer" target="_blank" ref={github} onMouseEnter={() => {github.current.classList.toggle('hover')}} onMouseLeave={() => {github.current.classList.remove('hover')}} >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/sergio-grimaldo-26472b189/" style={{ textDecoration: 'none', color: 'black' }} rel="noreferrer" target="_blank" ref={linked} onMouseEnter={() => {linked.current.classList.toggle('hover')}} onMouseLeave={() => {linked.current.classList.remove('hover')}}>
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="descriptionabt">
                <p>
                I'm currently studying to become a Full Stack Web Developer 
                at <a href="https://www.soyhenry.com/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} rel="noreferrer" target="_blank">Henry</a><br></br>
                This is an app made with React which collects data from the openWeatherMap API and renders it in cards. Hope you like it!

                </p>
              </div>
              
            </main>
        </div>
      </div>
    );
  }

  
