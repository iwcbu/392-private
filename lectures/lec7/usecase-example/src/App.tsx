import RickAndMorty from "./components/RickAndMorty.tsx";
import { useEffect, useState } from 'react';
import styled from "styled-components";
import type {Character} from "./type/Character.ts";


const ParentDiv = styled.div`
    width: 80vw;
    margin: 0 auto;
    border: 5px lightgrey solid;
    padding: 0 6vw;
`;


export default function App() {

  const[data, setData] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      // extracts data from api
      const rawData = await fetch("https://rickandmortyapi.com/api/character");

      // rawData.json() turns data into an object and change the value of data to rawData
      const { results }: { results: Character[] } = await rawData.json();
      setData(results);
    }
    fetchData()
      .then(() => console.log("All good"))
      .catch((e) => console.log("No bueno: " + e));
  }, [data.length]
    )

  return (
    <ParentDiv>
       <RickAndMorty data={data}/>
    </ParentDiv>
  )

}

