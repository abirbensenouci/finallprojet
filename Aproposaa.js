import React from 'react';
import '../App.css';
 
import Nav from './navbarsignaa'
import truth from '../photo/seekforthetruth.jpg';
 import Footer from '../Footer'
 import { createBrowserHistory } from 'history';
   
 

function home() {



    const history = createBrowserHistory();

    const handleClick = () => {
         history.push('/Contact');  
    };
  return (
  <main>
  
      <Nav/>
      <div className="body-apropos">
        <div id='bigdiv'>
          <img className='backgroundimg' src={truth} alt=''></img>
          <div id="content">
            <h1 className='text-[30px] text-white ml-10'>A qui s’adresse ce site ?</h1>
            <p className='text'>A tous ceux qui recherchent un avocat, et à tous les avocats algériens.</p>
            <h1 className='text-[30px] text-white ml-10'>Conseils pratiques : </h1>
            <p className='text'>Si vous êtes impliqué dans une affaire juridique, il est important de choisir le bon avocat pour vous représenter. Cependant, il peut être difficile de savoir par où commencer votre recherche. Voici quelques conseils pratiques pour vous aider à choisir le bon avocat pour votre cas, avec l'aide de notre site web d'avocats.</p>
            <ul className='text'>
              <li>Déterminez vos besoins juridiques : Avant de commencer à chercher un avocat, vous devez déterminer quels sont vos besoins juridiques. Avez-vous besoin d'un avocat spécialisé dans un domaine particulier, tel que le droit des affaires ou le droit de la famille ? Avez-vous besoin d'un avocat pour vous représenter dans une affaire civile ou pénale ? En comprenant vos besoins juridiques, vous pouvez commencer à chercher un avocat qui répond à vos exigences.</li>
              <li>Faites vos recherches sur notre site web : Notre site web d'avocats vous permet de rechercher des avocats qualifiés et expérimentés en quelques clics. Vous pouvez utiliser notre outil de recherche pour trouver des avocats spécialisés dans différents domaines du droit et des juridictions. Vous pouvez également filtrer les résultats par emplacement, expérience, langue parlée, tarifs et bien plus encore.</li>
              <li>Évaluez les qualifications de l'avocat : Lorsque vous trouvez un avocat potentiel sur notre site web, vous pouvez facilement évaluer ses qualifications en consultant sa page de profil. Vous y trouverez des informations sur son parcours académique, son expérience professionnelle, ses domaines de spécialisation et ses qualifications. Vous pouvez également consulter les évaluations et les commentaires des clients précédents pour vous faire une idée de l'expérience de travail avec cet avocat.</li>
              <li>Demandez des références et des évaluations : Sur notre site web, vous pouvez facilement demander à l'avocat de vous fournir des références de clients passés ou actuels. Vous pouvez également consulter les évaluations en ligne de l'avocat pour voir ce que les autres clients ont dit de lui. De plus, notre site web offre une fonction de messagerie sécurisée qui vous permet de communiquer directement avec l'avocat pour poser des questions ou demander des informations supplémentaires.</li>
              <li>Posez des questions importantes : Lorsque vous rencontrez un avocat potentiel via notre site web, vous pouvez facilement poser des questions importantes pour évaluer sa capacité à gérer votre cas. Notre plateforme de messagerie sécurisée vous permet de communiquer directement avec l'avocat et de lui poser des questions sur ses compétences, ses expériences et ses stratégies pour gagner votre affaire.</li>
              <li>Vérifiez les frais et les honoraires : Sur notre site web, vous pouvez facilement consulter les tarifs et les honoraires de l'avocat avant de le contacter. Vous pouvez également utiliser notre outil de comparaison des tarifs pour comparer les prix et les offres de différents avocats pour vous assurer de trouver celui qui convient.</li>
            </ul>

            <h1 className='text-[30px] text-white ml-10'>Témoignages:</h1>
            <p className='text'>★★★★★ "L'utilisation de la plateforme est extrêmement facile et intuitive. Si je devais décrire LawExpertise en quelques mots, je dirais : rapide, facile, efficace et pertinent." - Agnieszka S., conseillère juridique pour Office de la Naissance et de l'Enfance</p>
            <p className='text'>★★★★★ "Excellent moyen supplémentaire de faire connaître nos appels d’offres et c’est aussi un excellent moyen de connaître des avocats potentiellement intéressés par ce marché public." - Maïté C., Responsable Marchés Publics, Commune de Jette</p>
            <p className='text'>★★★★★ "Sur la plateforme LawExpertise, nous avons été mis en contact avec des professionnels qui nous ont accompagné dans une gestion efficace de notre litige afin de trouver les meilleures solutions." - Maxime V., General Counsel</p>

          </div>
          <div id='bouton'>
            <button className='boutton' onClick={handleClick}> <a href="/Contact" id="contacternous">Contacter-nous</a></button>
          </div>
        </div><Footer className='mt-20' />
      </div>
          </main>
          );
          }


export default home;
     
      
