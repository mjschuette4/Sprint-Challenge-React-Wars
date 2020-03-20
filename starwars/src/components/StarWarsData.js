import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarWarsData = props => {

const
starWarsCharcters = [];
characterData = [];

props.characterUrl.map(characters => {
    starWarsCharacters.push(characters);
})

useEffect(() => {
    starWarsCharacters.forEach(character => {
        axios.get(`${character}`)
        .then(response => {
            // console.log(response)
            return characterData.push(response)
        })
        .catch(error => {
            console.log(error)
        });
    })
}, []);
}

export default StarWarsData;