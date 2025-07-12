import type { Character } from "../type/Character.ts"
import styled from "styled-components";

const AllCharsDiv = styled.div`
    displat: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: whitesmoke;
`;

const SingleCharDiv = styled.div `
    display flex;
    flex-direction: column;
    justify-content: center;
    max-width:30%;
    padding: 2%;
    margin: 1%;
    background-color: azure;
    border: 3px black solid;
    font: sans-serif;
    text-align: center;
`;

export default function RickAndMorty(props : {data:Character[]}) {

    return  (
        <AllCharsDiv>
            {
                props.data.map((char: Character)=> 
                    <SingleCharDiv key={char.id}> 
                        <h1>{char.name}</h1>
                        <p>{char.species !== "Human" ? "Not Human" : "" }</p>
                        <img src={char.image} alt={char.name} />
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    )
}