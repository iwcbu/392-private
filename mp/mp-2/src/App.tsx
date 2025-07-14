import styled from "styled-components";
import { useEffect, useState } from "react";
import RickAndMorty from "./components/RickAndMorty.tsx";
import type { Character } from "./interfaces/Characters.ts";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px black solid;
`;


export default function App() {
  
  // useState to store data
  const [data, setData] = useState<Character[]>([]);
  
  //useEffect for error handling and re-renders
  useEffect(() => {
    async function fetchData(): Promise<void> {
        const rawData = await fetch("https://rickandmortyapi.com/api/character");
        const {results} : {results: Character[]} = await rawData.json();
        setData(results);
      
      

    }
    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e:Error) => console.log("There was the error" + e));
  }, []);


  return (
    <ParentDiv>
      <RickAndMorty data={data}/>
    </ParentDiv>
  )
}

