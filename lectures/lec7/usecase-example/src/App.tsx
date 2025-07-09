import { useEffect } from 'react';
import { useState } from 'react'

import './App.css'

export function App() {

  const[data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
        // extracts data from api
        const rawData = await fetch("https://rickandmortyapi.com/api/character");
        
        // rawData.json() turns data into an object
        const {results} = await rawData.json();
        
        setData(results);
        }
        fetchData()
        .then(()=>console.log("All good"))
        .catch((e)=>console.log("No bueno: "+e));
        }, [data.length]
    )

  return (
    <>
      {
        data.map((character)=> 
          <div>

          </div>)
      }
    
    
    </>
  )

}

export default App
