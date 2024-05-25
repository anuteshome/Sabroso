import React from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './recipeNav.css'
import RecipeP from '../pages/recipe'

function RecipeC() {
  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
    const element = document.querySelector('.recipe_nav');
    if (isDarkModeEnabled) {
      element.classList.add('dark-mode');
    }

          }, []);

  const toggleDarkMode = () => {
    const element = document.querySelector('.recipe_nav');
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
    <div className='recipe_nav'>
    <h1 Link  to="Hero" >Sabroso<span>.</span></h1>
    {/* navigation */}
    <div>
    <nav className='nav_recipe'>
      <Link to="/" className='link'>Home</Link>
      <Link to="/H" className='link'>Recipes</Link>
    </nav>
    </div>
{/* input */}
    <div>
      <input type='search' className='search'></input>
    </div>
    {/* button */}
    <div>
      <button className='btnr'>SignUp</button>
      </div>
    </div>
  )
}

export default RecipeC
