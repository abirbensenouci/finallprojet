import React, { useState } from "react";
import "../App.css";
import Nav from './navbarsignaa';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const avocats = [
  { code_barrau: 20104892, nom: "Malti Hamza" },
  { code_barrau: 20180005, nom: "Merad Khadidja " },
  { code_barrau: 20110523, nom: "Merabet Amina  " },
  { code_barrau: 20181278, nom: "Benchouk Fewzia  " },
  { code_barrau: 20192078, nom: "Sahel Mohamed " },
  { code_barrau: 20200001, nom: "charif Fayssel " },
  { code_barrau: 20200002, nom: "Bendjaefer Houssem " },
  { code_barrau: 20201279, nom: "Belabdelli Arslane " },
  { code_barrau: 20201325, nom: "Benikhlef Imad " },
  { code_barrau: 20230256, nom: "Tchouar Djilali" },
  { code_barrau: 20213596, nom: "Medjdoub Feriel " },
  { code_barrau:20230496 , nom: "Benzerdjeb Adnane" },

];



 

 function SearchBar() {
  const [query, setQuery] = useState("");
  const [filteredAvocats, setFilteredAvocats] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    if (searchTerm.length > 0) {
      const filtered = avocats.filter((avocat) =>
        avocat.nom.toLowerCase().startsWith(searchTerm)
      );
      setFilteredAvocats(filtered);
    } else {
      setFilteredAvocats([]);
    }
  };

  const handleSelect = (nom) => {
    setQuery(nom);
    setFilteredAvocats([]);
  };

  return (
    <><Nav /><div className="search-bar-container">
      <div className="searche-input-container">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Rechercher un avocat..."
          className="searche-input" />
        <button className="search-button" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {filteredAvocats.length > 0 && (
        <div className="search-results">
          <ul>
            {filteredAvocats.map((avocat) => (
              <li key={avocat.code_barrau} onClick={() => handleSelect(avocat.nom)}>
                <a href={`/Profila?code_barrau=${avocat.code_barrau}`}>{avocat.nom}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      
    </div></>
);

}

export default SearchBar;