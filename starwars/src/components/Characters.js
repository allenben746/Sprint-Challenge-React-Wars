import React, { useEffect, useState } from "react";
import axios from 'axios';


const Character = () => {

    const [characterName, setCharacterName] = useState([]);

    useEffect(() => {
        axios
        .get(
            "https://swapi.co/api/people/"
        )
            .then(data => {
                const characterObject = data.data.results
                console.log(characterObject)
                console.log("Data fetched successfully.")
            }
            )
            .catch(() =>
            console.log('Error in fetching server data.'))
            }, [])

    return (
      <div>Axios div.</div>
    );

    
  };

export default Character;