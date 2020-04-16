import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokeHooks() {
  const [id, setId] = useState(1);
  const [poke, setPoke] = useState('');

  useEffect(() => {
    async function getPokeData() {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      console.log(response);
      setPoke(response.data);
    };
    getPokeData();
  }, [id]);

  return (
    <div>
      <h2>You select: {poke.name}</h2>
      <select value={id} onChange={(e) => setId(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  )
}

export default PokeHooks;
