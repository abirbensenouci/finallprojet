import '../App.css';
import Nav from './navbarsign';
import Footer from '../Footer';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = () => {

  const [values, setValues] = useState({
    nom: '',
    prenom: '',
    adressecabinet: '',
    codepostal: '',
    telephone: '',
    email: '',
    description: '',
    ville: '',
    age: '',
    type: '',
    specialite: '',
    photo: null,
  });

  const navigate = useNavigate();
  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const [code_barrau, setCodeBarrau] = useState('');

  useEffect(() => {
    const code_barrauParam = new URLSearchParams(window.location.search).get('code_barrau');
    if (code_barrauParam) {
      setCodeBarrau(code_barrauParam);
    }
  }, []);

  const handleFileInput = (event) => {
    const file = event.target.files[0];
    setValues((prev) => ({ ...prev, photo: file }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 
    axios
      .post('http://localhost:8081/Formulaireprofil' , {
        params: { code_barrau },
         
      })
      .then((res) => {
        navigate(`/Profil?code_barrau=${res.data.code_barrau}`);
      })
      .catch((err) => console.log(err));
  };



  const options  = [
    { value: '01', name: 'Adrar' },
    { value: '02', name: 'Chlef' },
    { value: '03', name: 'Laghouat' },
    { value: '04', name: 'Oum El Bouaghi' },
    { value: '05', name: 'Batna' },
    { value: '06', name: 'Béjaïa' },
    { value: '07', name: 'Biskra' },
    { value: '08', name: 'Béchar' },
    { value: '09', name: 'Blida' },
    { value: '10', name: 'Bouira' },
    { value: '11', name: 'Tamanrasset' },
    { value: '12', name: 'Tébessa' },
    { value: '13', name: 'Tlemcen' },
    { value: '14', name: 'Tiaret' },
    { value: '15', name: 'Tizi Ouzou' },
    { value: '16', name: 'Alger' },
    { value: '17', name: 'Djelfa' },
    { value: '18', name: 'Jijel' },
    { value: '19', name: 'Sétif' },
    { value: '20', name: 'Saïda' },
    { value: '21', name: 'Skikda' },
    { value: '22', name: 'Sidi Bel Abbès' },
    { value: '23', name: 'Annaba' },
    { value: '24', name: 'Guelma' },
    { value: '25', name: 'Constantine' },
    { value: '26', name: 'Médéa' },
    { value: '27', name: 'Mostaganem' },
    { value: '28', name: 'M\'Sila' },
    { value: '29', name: 'Mascara' },
    { value: '30', name: 'Ouargla' },
    { value: '31', name: 'Oran' },
    { value: '32', name: 'El Bayadh' },
    { value: '33', name: 'Illizi' },
    { value: '34', name: 'Bordj Bou Arreridj' },
    { value: '35', name: 'Boumerdès' },
    { value: '36', name: 'El Tarf' },
    { value: '37', name: 'Tindouf' },
    { value: '38', name: 'Tissemsilt' },
    { value: '39', name: 'El Oued' },
    { value: '40', name: 'Khenchela' },
    { value: '41', name: 'Souk Ahras' },
    { value: '42', name: 'Tipaza' },
    { value: '43', name: 'Mila' },
    { value: '44', name: 'Aïn Defla' },
    { value: '45', name: 'Naâma' },
    { value: '46', name: 'Aïn Témouchent' },
    { value: '47', name: 'Ghardaïa' },
    { value: '48', name: 'Relizane' },
    { value: '49', name: 'El M\'ghair' },
    { value: '50', name: 'El Menia' },
    { value: '51', name: 'Ouled Djellal' },
    { value: '52', name: 'Bordj Baji Mokhtar' },
    { value: '53', name: 'Béni Abbès' },
    { value: '54', name: 'Timimoun' },
    { value: '55', name: 'Touggourt' },
    { value: '56', name: 'Djanet' },
    { value: '57', name: 'In Salah' },
    { value: '58', name: 'In Guezzam' }
  ];


  const optionstype  = [
    { value: '01', name: 'Internationnel' },
    { value: '02', name: 'Nationnel' } ];



  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit} className='forms'>
        <label className='labelprofil'>
          Nom:
          <input type='text' name='nom' onChange={handleInput} />
        </label>
        <label className='labelprofil'>
          Prénom:
          <input type='text' name='prenom' onChange={handleInput} />
        </label>
        <label className='labelprofil'>
          Age:
          <input type='text' name='age' onChange={handleInput} />
        </label>
       
        <label className='labelprofil'>
          Type:    <br/>
          <select className='selectprofil' name='type' onChange={handleInput}  >
            {optionstype.map((option) => (
              <option key={option.value} >
                {option.name}
              </option>
            ))}               </select>
            </label>
        <label className='labelprofil'>
          Spècialitè:
          <input type='text' name='specialite' onChange={handleInput} />
        </label>
        
         <label className='labelprofil'>
          Adresse de votre cabinet:
          <input type='text' name='adressecabinet' onChange={handleInput} />
        </label>
        <label className='labelprofil'>
          Ville:        <br/> 
          <select
            className='selectprofil'
            name='ville'
            onChange={handleInput}
          >
            {options.map((option) => (
              <option key={option.value} >
                {option.name}
              </option>
            ))}
          </select>
        </label>
        <label className='labelprofil'>
          Téléphone:
          <input type='text' name='telephone' onChange={handleInput} />
        </label>
        <label className='labelprofil'>
          Email:
          <input type='text' name='email' onChange={handleInput} />
        </label>
        <label className='labelprofil'>
          Code Postal:
          <input type='text' name='codepostal' onChange={handleInput} />
        </label>
        <label className='labelprofil'>
          Description:
          <textarea name='description' onChange={handleInput} />
        </label>
        <label className='labelprofil'>
  Photo de profil:
  <input type='file' name='photo' onChange={handleFileInput} />
</label>

        <button type='submit' className='submitprofil'>
          Envoyer
        </button>

      </form>
      <Footer />
    </>
  );
};

export default Form;
