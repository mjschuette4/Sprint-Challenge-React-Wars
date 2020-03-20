import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';

const StarWarsData = (props) => {
  return (
        <Card body>
          <CardTitle>Name: {props.name}</CardTitle>
          <br></br>
          <CardText>Height: {props.height}</CardText>
          <br></br>
          <CardText>Mass: {props.mass}</CardText>
          <br></br>
          <CardText>Hair Color: {props.hair_color}</CardText>
          <br></br>
          <CardText>Skin Color: {props.skin_color}</CardText>
          <br></br>
          <CardText>Eye Color: {props.eye_color}</CardText>
          <br></br>
          <CardText>Birth Year: {props.birth_year}</CardText>
          <br></br>
          <CardText>Gender: {props.gender}</CardText>
          <br></br>
          <Button color="primary" size="lg" onClick={() => alert("GENERAL KENOBI")}>Hello there!</Button>
        </Card>
  );
};

export default StarWarsData;