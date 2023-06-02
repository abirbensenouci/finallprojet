import React from 'react';
import  '../App.css';
import Nav from './navbarsign'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom';
 


export default function WelcomePage() {
  const location = useLocation();
   const nom= new URLSearchParams(location.search).get('nom');
  const prenom= new URLSearchParams(location.search).get('prenom');
  const id_client= new URLSearchParams(location.search).get('id_client');

  return (
    <><Nav/><div className='welcome-page'>
      <h1>Hey {nom} {prenom}! </h1>
      <h2>Bienvenue sur LawExpertise.</h2>
      <a href={`/Recherche?id_client=${id_client}`}>Cliquez ici pour decouvrir notre avocats</a>

     </div>
    <Footer/></>
  )
}