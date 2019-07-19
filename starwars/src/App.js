import React from 'react';
import Character from './components/Characters';

import './App.css';
import styled from 'styled-components';

const CharacterShowcaseStyle = styled.div`

.mainContainer {
  display: flex;
  justify-content: center;
  padding: 10% 0 0 0;

  
}

.CharacterContainer {
  width: 55%;
  height: 40%;
  border: solid;
  border-radius: 50%;
  background-color: tan;
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover { 
    background-color: lightblue;
  }
  
}
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (

      <div>
      <CharacterShowcaseStyle><Character /></CharacterShowcaseStyle>
      </div>
  );
}

export default App;
