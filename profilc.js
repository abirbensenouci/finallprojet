import React, { useState, useEffect } from 'react';
import '../App.css';
import Nav from './navbarsign';
import { useLocation } from 'react-router-dom';



const LawyerProfile = () => {
  const location = useLocation();
  const id_client= new URLSearchParams(location.search).get('id_client');

  const [avocat, setAvocat] = useState(null);

  useEffect(() => {
    const code_barrau = new URLSearchParams(window.location.search).get('code_barrau');

    if (code_barrau) {
      // Effectuer une requête GET pour récupérer les informations de l'avocat
      fetch(`http://localhost:8081/avocat/${code_barrau}`)
        .then(response => response.json())
        .then(data => {
          setAvocat(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  if (!avocat) {
    return null; // ou afficher un message de chargement
  }

  return (
    <>
      <Nav />

      <div className='profile-container p-50 m-50'>
        <div className='name-section pt-10'>
        <img src={avocat.photo} className='pdp' alt='Profile' />
          <h1 className='text-[40px] text-center' style={{ color: 'red' }} >Mr. {avocat.nom_av} {avocat.prenom_av}</h1>
        </div>
        <div className='information'>
          <p className='text-[30px] '>Age:</p> 
          <p className='additional-info mb-5'>{avocat.age}</p>
         
          <p className='text-[30px] '>Wilaya:</p> 
          <p className='additional-info mb-5'>{avocat.wilaya}</p>
          <p className='text-[30px] '>Code Postale:</p> 
          <p className='additional-info mb-5'>{avocat.code_postale}</p>
          <p className='text-[30px] '>spécialité:</p> 
          <p className='additional-info mb-5'>{avocat.specialite}</p>
          <p className='text-[30px] '>Type:</p> 
          <p className='additional-info mb-5'>{avocat.type}</p>
           <p className='text-[30px] '>Numèro telephone:</p> 
          <p className='additional-info mb-5'>{avocat.num_tel_av}</p>
          <p className='text-[30px] '>email:</p> 
          <p className='additional-info mb-5'>{avocat.email}</p>
          <p className='text-[30px] '>Adresse:</p>
           <p className='additional-info mb-5'>{avocat.adresse}</p>
           <p className='text-[30px] '>description:</p>
           <p className='additional-info mb-5'>{avocat.description}</p>

        </div>
         <button type='submit'><a href={`/Temoignagec?code_barrau=${avocat.code_barrau}&id_client=${id_client}`}>Voir les temoignege sur ce avocat</a> </button>
         <button type='submit'><a href={`/RV?code_barrau=${avocat.code_barrau}&id_client=${id_client}`}>Prendre un rendez_vous avec ce avocat</a> </button>

      </div>
    </>
  );
};

export default LawyerProfile;
