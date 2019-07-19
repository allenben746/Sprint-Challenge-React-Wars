import React from "react";

import './showcase.css'


const CharacterShowcase = (props) => {
  const {character} = props
  return (
    <div className = "mainContainer">
      <div className="CharacterContainer">
          <p className="name">{character.name}</p>
          <p className="height">{character.height}</p>
          <p className="mass">{character.mass}</p>
      </div>
    </div>
    
  );
};

export default CharacterShowcase;