import React from "react";



const CharacterShowcase = (props) => {
  const {character} = props
  return (
    <div className = "mainContainer">
      <div className="CharacterContainer">
          <p className="name">{character.name}</p>
          <p className="height">{character.height} inches</p>
          <p className="mass">{character.mass} kilograms</p>
      </div>
    </div>
    
  );
};

export default CharacterShowcase;