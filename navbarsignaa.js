import React from "react";
import '../App.css';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();

    const code_barrau= new URLSearchParams(location.search).get('code_barrau');

    return (

        <header>
            <nav className="navbar flex pt-5">
                <img className="img1 ml-10 mr-20" src='photo/logo.png' alt='LawExpertise' />
                <NavLink  to={`/Acceilprofilaa?code_barrau=${code_barrau}`}>Accueil</NavLink>
                <NavLink to={`/Recherchea?code_barrau=${code_barrau}`}>Avocats</NavLink>
                <NavLink to={`/Aproposaa?code_barrau=${code_barrau}`}>A propos</NavLink>
                <NavLink to={`/Blogaa?code_barrau=${code_barrau}`}>Blog</NavLink>
                <NavLink to={`/Serviceaa?code_barrau=${code_barrau}`}>Services</NavLink>
                 
                        <NavLink to='/Static'>statistique</NavLink>
                        <NavLink to='/'>Dexonnexion</NavLink>
                 
            </nav>
        </header>
    )
}

export default Navbar;