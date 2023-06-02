import React from "react";
import '../App.css';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Navbar=()=>{
    const location = useLocation();
  const code_barrau= new URLSearchParams(location.search).get('code_barrau');
   

    return( 
         
        <header>
        <nav className="navbar flex pt-5">
          <img className="img1 ml-10 mr-20" src='photo/logo.png' alt='LawExpertise' />
          <NavLink to= {`/Acceilprofila?code_barrau=${code_barrau}`}>Accueil</NavLink>
           <NavLink to= {`/Aproposa?code_barrau=${code_barrau}`}>A propos</NavLink>
          <NavLink to= {`/Bloga?code_barrau=${code_barrau}`}>Blog</NavLink>
          <NavLink to= {`/Servicea?code_barrau=${code_barrau}`}>Services</NavLink>
          <NavLink to={`/Profil?code_barrau=${code_barrau}`}>Votre Profil</NavLink> 
           <NavLink to={`/Formulaireprofil?code_barrau=${code_barrau}`}>editer profil</NavLink> 
           <NavLink to={`/Temoignagea?code_barrau=${code_barrau}`}>temoignage</NavLink> 
           <NavLink to='/'>Dexonnexion</NavLink>
       </nav>
        </header>
    )
}
 
export default Navbar;