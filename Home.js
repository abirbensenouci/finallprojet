import React from 'react';
import './App.css';
import Slider from "./slider.js";
import Cards from "./cards.js";
import Footer from "./Footer";
import Text1 from "./text1";
import Text2 from "./text2";

import { NavLink } from 'react-router-dom';


function home() {
  return (
  <main>
    <header>
      <nav className="navbar flex pt-5">
        <img className="img1 ml-10 mr-20" src='photo/logo.png' alt='LawExpertise' />
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='/'>Avocats</NavLink>
        <NavLink to='/Apropos'>A propos</NavLink>
        <NavLink to='/Blog'>Blog</NavLink>
        <NavLink to='/Service'>Services</NavLink>

        <NavLink to='/Contact'>Contacter nous</NavLink>
        <NavLink to='/sign'>S'inscrire</NavLink>
        <NavLink to='/log'>Se connecter</NavLink> 
      </nav>
      </header>
      <Slider/>
      <Text1 />
      <Cards />
      <Text2/>
      <Footer/>
          </main>
          );
          }


export default home;
     
      
