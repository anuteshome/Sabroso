import React from 'react';
import RecipeC from './recipeNav copy';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import './heror.css';
import rice from '../pics/rice.png';
import chicken from '../pics/chocho.png';
import ricee from '../pics/ricee.png';
import best from '../pics/bestt.png';
import Food1 from '../pages/food1';
import { FaMoon } from "react-icons/fa";
import { useEffect,useState } from 'react';
import data from './TemplateData.json';
import './TempletData.css'
import Meal1 from '../Recipe/Meal1';
// function Function() {
//   var element = document.querySelector('.hero_all ');
//   element.classList.toggle('dark-mode');
// }

  
    // Run this effect only once when the component mounts

function Heror() {
  const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
        const element = document.querySelector('.hero_all');
        if (isDarkModeEnabled) {
          element.classList.add('dark-mode');
        }

              }, []);
    
      const toggleDarkMode = () => {
        const element = document.querySelector('.hero_all');
        const isDarkMode = element.classList.contains('dark-mode');
        if (isDarkMode) {
      element.classList.remove('dark-mode');
          localStorage.removeItem('darkMode');
        } else {
          element.classList.add('dark-mode');
          localStorage.setItem('darkMode', 'true');
        }
      };
  return (
    <div id='Hero'>
      <div className='hero_all'>
        <h2 style={{
          fontFamily: 'sans-serif',
          fontSize: '1.5rem'
        }}>Recent </h2>
        <button onClick={toggleDarkMode}><FaMoon /></button>

        <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input className='search' id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div   >
        <div id="allm">
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div> 
                    <Link to="/Food1">
                  <div className="template" key={val.id}>
                      <img  src={val.image} alt=""  className="jsonimage"/>
                      <h3 className='nameo'>{val.title}</h3>
                      <p className="price">${val.price}</p>
                  </div> 
                  </Link>
                  {/* 2 */}
                  {/* <Link to="/Food1">
                  <div className="template" key={val.id}>
                      <img  src={val.image} alt=""  className="jsonimage"/>
                      <h3>{val.title}</h3>
                      <p className="price">${val.price}</p>
                  </div> 
                  </Link> */}
                  </div>
                )
              })
          }
        </div>
        </div>
      </div>
    </>
  


      </div>
    </div>
  );
}

export default Heror;
