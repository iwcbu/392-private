import styled from "styled-components";
import type { Character } from "../interfaces/Characters.ts";

const AllCharsDiv = styled.div`
    margin: 0 auto;
    display:flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: whitesmoke;
`;


const CharDiv = styled.div<{ gender: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 20vw;
    max-height: 30vw;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(props.gender === "Female" ? '#FFD1DC' : '#A7C7E7')};
    color: ${(props)=>(props.gender === "Female" ? '#FFB0B5' : '#DEE6E9')};
    font: fantasy;
    text-align: center;
    border: 3px black solid;
    border-radius: 10%;
    font-size:  calc(2px + 1vw);
`;




export default function RickAndMorty(props : { data: Character[] }) {
    return (
        <AllCharsDiv>
            {
                props.data.map((char: Character) =>
                    <CharDiv key={char.id} gender={char.gender}>
                        <h2>{char.name}</h2>
                        <h4>{char.species} - {char.gender}</h4>
                        <p>{char.origin.name}</p>
                        <img src={char.image}></img>
                        <p>
                            <u>Current Location</u><br/>
                            {char.location.name}
                        </p>
                    </CharDiv>
                )
            }
        </AllCharsDiv>
    )
 }

