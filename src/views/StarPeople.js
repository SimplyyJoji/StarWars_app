import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StarPeople = (props) => {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    axios
    .get("https://swapi.dev/api/people/" + props.id)
    .then((res) => {
      setPeople(res.data);
      console.log(setPeople)
      console.log(res.data)
    })
    .catch((err) => {
      console.log('ERROR')
    });
  },[props.id]);

  if (people === null) {
    return "Loading..."
  }

  return (
    <div>
      <h2>Name: {people.name}</h2>
      <p>Height: {people.height}</p>
      <p>Hair Color: {people.hair_color}</p>
      <p>Skin Color: {people.skin_color} </p>
    </div> 
  );
}

export default StarPeople;