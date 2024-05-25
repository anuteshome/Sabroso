import React from 'react'
import './home.css'
import { useEffect ,useState} from 'react';
import Navbar from '../components/navbar'
import Hero from '../components/Hero';
import Section2 from '../components/Aboutus';
import Message from '../components/message';
import Testi from '../components/testimonial';
import Teams from '../components/Teams'
import Footer from '../components/footer'
import { FaMoon } from "react-icons/fa";
import Contact from '../config/contact';



function Home() {
  
  
  
  // useEffect(() => {
  //   const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
  //   const element = document.querySelector('body');
  //   if (isDarkModeEnabled) {
  //     element.classList.add('dark-mode');
  //   }

  //         }, []);

  // const toggleDarkMode = () => {
  //   const element = document.querySelector('body');
  //   const isDarkMode = element.classList.contains('dark-mode');
  //   if (isDarkMode) {
  // element.classList.remove('dark-mode');
  //     localStorage.removeItem('darkMode');
  //   } else {
  //     element.classList.add('dark-mode');
  //     localStorage.setItem('darkMode', 'true');
  //   }
  // };

  return (
    <div className='Home'>
      <Navbar />
    <Hero/>
    <Section2 />
    <Testi/>
    <Teams />
    <Message/>
    <Footer />
  
    </div>
  )
}

export default Home;
