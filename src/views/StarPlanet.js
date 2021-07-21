import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StarPlanet = (props) => {
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    axios
    .get("https://swapi.dev/api/planets/" + props.id)
    .then((res) => {
      setPlanet(res.data);
      console.log(setPlanet)
      console.log(res.data)
    })
    .catch((err) => {
      console.log('ERROR')
    });
  },[props.id]);

  if (planet === null) {
    return <img src="https://www.meme-arsenal.com/memes/1d48fd27fc0fc8c404973adc371632ba.jpg"></img>
  }

  return (
    <div>
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Surface Water: {planet.surface_water}</p>
      <p>Population: {planet.population}</p>
    </div>
  );
}

export default StarPlanet;