import React from 'react';
import './App.css';
import Log from "./log";
import Home from "./Home";
import Sign from "./sign.js";
import Contact from "./Contact.tsx";
import Apropos from "./Apropos";
import Blog from "./blog";
import Service from "./Services";
import Homeprofil from "./profil_client/Acceilprofilc";
import Servicec from './profil_client/Servicec.js'
import Blogc from './profil_client/Blogc.js'
import Aproposc from './profil_client/Aproposc.js'
import WelcomePagec from "./profil_client/WelcomePagec";
import Recherche from "./profil_client/recherche";
import Profilc from "./profil_client/profilc";
import Temoignagec from "./profil_client/Temoignagec";
import RV from "./profil_client/RV";


import Formulaireprofil from "./profil_avocat/Formulaireprofil";
import WelcomePagea from "./profil_avocat/WelcomePagea";
import Bloga from "./profil_avocat/Bloga";
import Aproposa from './profil_avocat/Aproposa'
import Servicea from './profil_avocat/Servicea'
import Profil from './profil_avocat/Profil'
import Acceilprofila from './profil_avocat/Acceilprofila'
import Temoignagea from "./profil_avocat/temoignegea";



import Static from "./profil_admin/static";
import Wpaa from "./profil_admin/WelcomePageaa";
import Blogaa from "./profil_admin/Blogaa";
import Aproposaa from './profil_admin/Aproposaa'
import Serviceaa from './profil_admin/Serviceaa'
import Homeprofilaa from "./profil_admin/Acceilprofilaa";
import Profila from "./profil_admin/Profila";
import Recherchea from "./profil_admin/Recherchea";
import Temoignageaa from "./profil_admin/Temoignageaa";



import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/log' element={<Log />} />
        <Route path='/Apropos' element={<Apropos />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/sign' element={<Sign />} />



        <Route path='/Acceilprofil' element={<Homeprofil />} />
        <Route path='/Aproposc' element={<Aproposc />} />
        <Route path='/Blogc' element={<Blogc />} />
        <Route path='/Servicec' element={<Servicec />} />
        <Route path='/WelcomePagec' element={<WelcomePagec />} />
        <Route path='/Recherche' element={<Recherche />} />
        <Route path='/Profilc' element={<Profilc />} />
        <Route path='/Temoignagec' element={<Temoignagec />} />


        <Route path='/Profila' element={<Profila />} />
        <Route path='/static' element={<Static />} />
        <Route path='/WelcomePageaa' element={<Wpaa />} />
        <Route path='/Blogaa' element={<Blogaa />} />
        <Route path='/Serviceaa' element={<Serviceaa />} />
        <Route path='/Aproposaa' element={<Aproposaa />} />
        <Route path='/Acceilprofilaa' element={<Homeprofilaa />} />
        <Route path='/Temoignageaa' element={<Temoignageaa />} />
        <Route path='/RV' element={<RV/>} />



        <Route path='/Bloga' element={<Bloga />} />
        <Route path='/Servicea' element={<Servicea />} />
        <Route path='/Aproposa' element={<Aproposa />} />
        <Route path='/Formulaireprofil' element={<Formulaireprofil />} />
        <Route path='/WelcomePagea' element={<WelcomePagea />} />
        <Route path='/Profil' element={<Profil />} />
        <Route path='/Acceilprofila' element={<Acceilprofila />} />
        <Route path='/Recherchea' element={<Recherchea />} />
        <Route path='/Temoignagea' element={<Temoignagea />} />







      </Routes>
    </>
  );
}


export default App;


