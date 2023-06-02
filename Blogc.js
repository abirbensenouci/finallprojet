import React from 'react';
import '../App.css';
import divorce from '../photo/divorcedecree.jpg';
import ArticleList from '../ArticleList';
import Nav from './navbarsign';




function home() {
    return (
        <main> 
            <Nav />
            <img className='backgroundimg' src={divorce} alt=''></img>
            <ArticleList />
        </main>
    );
}


export default home;


