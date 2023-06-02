import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Nav from './navbarsign';
import image1 from '../photo/question-client.png';
import image2 from '../photo/calendrier.png';

const Testimonial = () => {
  const [temoignages, setTemoignages] = useState([]);
  const [newTemoignage, setNewTemoignage] = useState({
    temoignage: '',
  });
  const location = useLocation();
  const id_client = new URLSearchParams(location.search).get('id_client');
  const code_barrau = new URLSearchParams(location.search).get('code_barrau');

  useEffect(() => {
    if (code_barrau) {
      fetch(`http://localhost:8081/temoignage/${code_barrau}`)
        .then(response => response.json())
        .then(data => {
          setTemoignages(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [code_barrau]);

  const handleChange = (event) => {
    setNewTemoignage({
      ...newTemoignage,
      [event.target.name]: event.target.value,
    });
  };
  //const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`http://localhost:8081/temoignage/${code_barrau}/${id_client}`, newTemoignage)
      .then(() => {
        setNewTemoignage({ 
          temoignage: '',
        });      
        const code_barrau = new URLSearchParams(window.location.search).get('code_barrau');
        fetch(`http://localhost:8081/temoignage/${code_barrau}`)
          .then(response => response.json())
          .then(data => {
            setTemoignages(data);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Nav />
      <div className="article-list-block">
        {temoignages.map((temoignage) => (
          <article className="article-item" key={temoignage.id}>
            <div className="article-content">
              <div className="article-header">
                <div className="article-summary article-summary-center">
                  <img className="article-avocat" src={image1} alt="Avocat" />
                  <p>{temoignage.nom_cl} {temoignage.prenom_cl}</p>
                </div>
                <div className="article-meta">
                  <div className="article-summary article-summary-center">
                    <img className="article-avocat" src={image2} alt="Avocat" />
                    <span className="article-date">{temoignage.date}</span>
                  </div>
                  {temoignage.description}
                </div>
              </div>
            </div>
          </article>
        ))}<form className='forrm' onSubmit={handleSubmit}>
        <label className='text-[20px] '>
          Rediger votre Temoignage:
          <textarea className='formm' name="temoignage" value={newTemoignage.temoignage} onChange={handleChange}/>
        </label>
         
        <button type="submit">Submit</button>
      </form>
      </div>
      
    </>
  );
};

export default Testimonial;
