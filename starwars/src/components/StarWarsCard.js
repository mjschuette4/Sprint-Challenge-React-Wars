import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsData from './StarWarsData';
import { Badge } from 'reactstrap';
import styled from 'styled-components';

const fdiv = styled.div `
padding: 10%;
`

const StarWarsCard = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response => {
          // console.log(response)
          return setMovie(response.data.results)
        })
        .catch(error => {
          console.log(error)
        })
      }, [])

return(
<div>
    {movie.map(movie => {
    return (
        <fdiv>
            {/* <Badge>{movie.release_date}</Badge>
            <h1>{movie.title}</h1>
            <div>
            <h2>Directed by {movie.director}</h2>
            <p>{movie.opening_crawl}</p>
            <StarWarsData  characterUrl = {movie.characters} />
            </div> */}
        </fdiv>
        )}
    )}
</div>
)}

export default StarWarsCard;