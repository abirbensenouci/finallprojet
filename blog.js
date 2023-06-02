import React from 'react'
import divorce from './photo/divorcedecree.jpg';
import ArticleList from './ArticleList';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

export default function () {
  return (
    <><body>
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
      <img className='backgroundimg' src={divorce} alt=''></img>
      <ArticleList />
    </body><Footer /></>
        )
}