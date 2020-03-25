import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsData from './StarWarsData';

const StarWarsCard = () => {

    const [character, setCharacter] = useState([]);

useEffect(() => {

  axios 
    .get('https://swapi.co/api/people/')
    .then(response => setCharacter(response.data.results))
    .catch(error => console.log(error))
}, [])

console.log("character data", character);

    return (
        character.map(characters => {

            return (  
                <StarWarsData
                    name={characters.name}
                    height={characters.height}
                    mass={characters.mass}
                    hair_color={characters.hair_color}
                    skin_color={characters.skin_color}
                    eye_color={characters.eye_color}
                    birth_year={characters.birth_year}
                    gender={characters.gender}
                />  

            )
        }    
    )
)}   

export default StarWarsCard;