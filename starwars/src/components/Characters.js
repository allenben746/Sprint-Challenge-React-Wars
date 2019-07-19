import React from "react";
import axios from 'axios';


const Character = () => {

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios
        .get(
            "https://swapi.co/api/people/1/"
        )
            .then(data => {
                console.log(data)
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