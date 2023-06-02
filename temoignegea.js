import React, { useState, useEffect } from 'react';
import '../App.css';
import Nav from './navbarsign';
import image1 from '../photo/question-client.png';
import image2 from '../photo/calendrier.png';


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
        ))}
      </div>
    </>
  );
};

export default Testimonial;
