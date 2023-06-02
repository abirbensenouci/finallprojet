import React, { useState, useEffect } from 'react';
import '../App.css';
import Nav from './navbarsignaa';
import image1 from '../photo/question-client.png';
import image2 from '../photo/calendrier.png';
import axios from 'axios';

const Testimonial = () => {
  const [temoignages, setTemoignages] = useState([]);

  useEffect(() => {
    const code_barrau = new URLSearchParams(window.location.search).get('code_barrau');

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
  }, []);

  const deleteTemoignage = (id_client, code_barrau, id) => {
    axios.delete(`http://localhost:8081/temoignage/${id_client}/${code_barrau}/${id}`)
      .then(() => {
        // Refresh the testimonial list after successful deletion
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

  const deleteCompte = (id_client) => {
    axios.delete(`http://localhost:8081/client/${id_client}`)
      .then(() => {
        const code_barrau = new URLSearchParams(window.location.search).get('code_barrau');
        fetch(`http://localhost:8081/temoignage/${code_barrau}`)
          .then(response => response.json())
          .then(data => {
            setTemoignages(data);
          })
          .catch(error => {
            console.log(error);
          });      })
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
               
              <button className='btn-read-more' onClick={() => deleteTemoignage(temoignage.id_client, temoignage.code_barrau, temoignage.id)}>Supprimer le temoignage</button>
              <button className='btn-read-more' onClick={() => deleteCompte(temoignage.id_client)}>Supprimer le compte</button>
           
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
