import type { ArtProps } from "@/types";
import styled from "styled-components";
import getArt from "@/lib/getArt";

const GalleryDiv = styled.div`
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

export default async function ArtGallery() {
    const props = await getArt();

    console.log("Test for props here")
    console.log(props);

    if(!props ||  props.length === 0) {
        return <div>No artworks found</div>
    }

    return (
        <GalleryDiv>
            {
                props.map((art) => (
                    <SingleCharDiv key={art.id}>
                        <img src={art.image} alt="${art.title} picture" />
                        <h1>{art.title}</h1>
                        <p>{art.description}</p>
                    </SingleCharDiv>
                    ))
            }
        </GalleryDiv>
    )
}