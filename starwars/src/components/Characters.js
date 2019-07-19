import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterShowcase from "./CharacterShowcase";


const Characters = () => {

    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        axios
        .get(
            // "https://swapi.co/api/people/"
            "https://henry-mock-swapi.herokuapp.com/api"
        )
            .then(data => {
                console.log(data.data.results)
                setCharacterList(data.data.results)
            }
            )
            .catch(() =>
            console.log('Error in fetching server data.'))
            }, [])
            console.log("Character List ->", characterList)
    return (
        <div> {
            characterList.map((character) => {
              return <CharacterShowcase character= {character} />
            }
      
            )}
      
          </div>
    );

    
  };

export default Characters;