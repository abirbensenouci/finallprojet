import React from 'react';
import  '../App.css';
import Nav from './navbarsignaa'
import Footer from '../Footer'



export default function WelcomePage(props) {
  return (
    <><Nav/><div className='welcome-page'>
      <h1>Hey {props.firstName} {props.lastName}! </h1>
      <h2>Bienvenue sur LawExpertise.</h2>
     </div>
    <Footer/></>
  )
}