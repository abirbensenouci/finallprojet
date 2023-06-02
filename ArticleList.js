import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import avocat from './photo/avocat.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function ArticleList() {
  const articles = [
    {
      id: 1,
      date: "25 août 2022",
      author: "Jean-Baptiste Favrot",
      title: "Droit de l'urbanisme : les principales règles à connaître pour votre entreprise",
      summary: "Le droit de l'urbanisme est un domaine complexe qui peut rapidement devenir un véritable casse-tête pour les entreprises. Dans cet article, nous vous présentons les principales règles à connaître pour mieux appréhender ce domaine et protéger vos intérêts.",
      content:"la suite",
    },
    {
      id: 2,
      date: "20 juillet 2022",
      author: "Jean-Baptiste Favrot",
      title: "Droit du travail : les principales règles à connaître pour votre entreprise",
      summary: "Le droit du travail est un domaine essentiel à connaître pour toutes les entreprises, afin de garantir le respect des droits des salariés et éviter les contentieux. Dans cet article, nous vous présentons les principales règles à connaître.",
      content:"la suite",

    },
    {
      id: 3,
      date: "5 mai 2022",
      author: "Jean-Baptiste Favrot",
      title: "Créer une entreprise : les étapes clés à connaître",
      summary: "Vous souhaitez créer votre entreprise ? Cela demande une préparation minutieuse en amont. Dans cet article, nous vous présentons les étapes clés à connaître pour concrétiser votre projet.",
      content:"la suite",

    },
  ];

  return (
    <div className="article-list">
      {articles.map((article) => (
        <article className="article-item" key={article.id}>
          <div className="article-content">
            <div className="article-header ">
              <h2 className="article-title"><a href="#">{article.title}</a></h2>
              <div className="article-meta flex">
                <span className="article-date flex"><FaRegCalendarAlt /> {article.date}</span>
                <img className="article-avocat" src={avocat}></img>{article.author}
              </div>
              
            </div>
            <div className="article-summary">
              <p>{article.summary}</p>
            </div>
            <Link className='btn-read-more' to={`/articles/${articles.id}`} >Lire la suite</Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ArticleList;