import React  from 'react';
 import Footer from '../Footer';
 import { useLocation } from 'react-router-dom';
 import { NavLink } from "react-router-dom";


export default function WelcomePage() {
  const location = useLocation();
  const code_barrau= new URLSearchParams(location.search).get('code_barrau');
  const nom= new URLSearchParams(location.search).get('nom');
  const prenom= new URLSearchParams(location.search).get('prenom');


 
  return (
<>
        <header>
        <nav className="navbar flex pt-5">
          <img className="img1 ml-10 mr-20" src='photo/logo.png' alt='LawExpertise' />
          <NavLink to='/Acceilprofila'>Accueil</NavLink>
           <NavLink to='/Aproposa'>A propos</NavLink>
          <NavLink to='/Bloga'>Blog</NavLink>
          <NavLink to='/Servicea'>Services</NavLink>
          <NavLink to={`/Profil?code_barrau=${code_barrau}`}>Votre Profil</NavLink> 
           <NavLink to={`/Formulaireprofil?code_barrau=${code_barrau}`}>editer profil</NavLink> 
        </nav>
        </header>
      <div className='welcome-page'>
         
          <>
          <h1>Salut Mr.{nom} {prenom}!</h1>
            <h2>Bienvenue sur LawExpertise.</h2>
            <h3>
          <a href={`/Formulaireprofil?code_barrau=${code_barrau}`}>Cliquez ici pour compléter votre profil</a>
            </h3>
          </>
         
      </div>
      <Footer />
    </>  );
}
 