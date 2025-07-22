import styled from 'styled-components';


const HeaderSty = styled.header`
    width: 80vw;
    margin: 0 auto;
    background-color:lightblue;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    


    h1, h5 {
        padding: 5px 10px;
    }
    

`;

export default function Header() {
    return (
        <HeaderSty>
            <h1>Ian Campbell</h1>
            <h5>Welcome to my resume!</h5>
        </HeaderSty>
    )
}