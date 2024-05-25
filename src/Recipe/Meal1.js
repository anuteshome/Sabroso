import React from 'react'
import { useEffect } from 'react';
import './food1.css'
import chicken from '../pics/chocho.png'
import Heror from './heror';
// import './heror.css';


function Meal1() {
  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
    const element = document.querySelector('.grid_F1');
    if (isDarkModeEnabled) {
      element.classList.add('dark-mode');
    }

          }, []);

  const toggleDarkMode = () => {
    const element = document.querySelector('.grid_F1');
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
    <div className='hero_all'>
    <div className='grid_F1'>
     <div>
      <img src={chicken} className='imageF1'/>
     </div>
     <div>
<h1>Chicken Roast </h1>
<h4>By Ananya Teshome</h4><br/><br/>
<ul>
  <h3>Ingeridient</h3><br/>
  <li>1 (4- to 5-pound) whole chicken</li>
  <li>Olive oil or softened butter</li>
  <li>1 tablespoon kosher salt</li>
  <li>Freshly ground black pepper</li>
  <li>Optional flavorings: lemon wedges or slices, fresh herbs, garlic cloves</li>
  <li> whole chicken</li>
  <li>Freshly ground black pepper</li>
  <li>1 tablespoon kosher salt</li>
</ul>
{/* instruction */}
<ul>
  <h3>Ingeridient</h3><br/>
  <li>Preheat the oven to 450°F. ...</li>
  <li>Remove the giblets. ...</li>
  <li>Pat the chicken dry. ...</li>
  <li>Rub the chicken with olive oil or butter. ...</li>
  <li>Sprinkle generously with salt and pepper. ...</li>
  <li>Place flavorings inside the chicken and truss (optional). ...</li>
  <li>Place the chicken, breast-side up, in the pan. ...</li>
  <li>Lower the heat to 400°F and roast for 60 minutes.</li>
</ul>
    
     </div>

    </div>
    </div>
  )
}

export default  Meal1;
