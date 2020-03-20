import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

const StarWarsData = props => {

const starWarsCharacters = [];
const characterData = [];

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

return (

    <div >
        {characterData.forEach(character => {

            console.log(character)

            return(<div> 
                 
            </div>)
    })}

    </div >

)
}

export default StarWarsData;