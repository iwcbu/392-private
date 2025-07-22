import styled from "styled-components";


// For Education ##############################################################################

export const EduSty = styled.div`
    width: 70vw;
    margin: 0 auto;
    padding: 3px;

    img {
        max-height: 25vh;
        max-width: 25vh;
        border-radius: 15px;
    }

    #heading {
        padding: 2vh 3vw;
        letter-spacing: 4px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    #certContent {
        width: 70%;
        padding: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:2rem;
        flex:1;
    }

    #certBox { margin: 0 auto; }

    
    #cert {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap:2rem
    }



    @media (max-width: 1000px) {
        #certContent { width: 100%; }
        #cert { flex-direction: column; }
    
    }

`

// ############################################################################################







// For Certifications #########################################################################

export const CertSty = styled.div`
    width: 70vw;
    padding: 3px;
    margin: 0 auto;

    img {
        max-height: 25vh;
        max-width: 25vh;
        border-radius: 15px;
    }

    #heading {
        padding: 2vh 3vw;
        letter-spacing: 4px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    #certContent {
        padding: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:2rem;
        flex:1;
    }

     #cert {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap:2rem
    }

    @media (max-width: 1000px) {
        #certContent { width: 100%; }
        #cert { flex-direction: column; }
    
    }

`;

// ###############################################################################################








// For References ################################################################################

export const RefSty = styled.div`
    width: 70vw;
    padding: 3px;
    margin: 0 auto;
    
    img {
        max-height: 25vh;
        max-width: 25vh;
        border-radius: 15px;
    }

    #heading {
        padding: 2vh 3vw;
        letter-spacing: 4px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    #refContent {
        padding: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:2rem;
        flex:1;
    }
    
    #ref {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap:2rem
    }

    @media (max-width: 1000px) {
        #refContent { width: 100%; }
        #ref { flex-direction: column; }
    
    }

`;

// #################################################################################################







// For Background ##################################################################################

export const BgSty = styled.div`
    width: 70vw;
    padding: 3px;
    margin: 0 auto;

    #heading {
        padding: 2vh 3vw;
        letter-spacing: 4px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    img {
        max-height: 25vh;
        max-width: 25vh;
        border-radius: 15px;
    }
    
    #container {
        flex:1;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
    }
    

    #bg1, #bg2, #bg3 {
        margin: 10px 0px;
        padding: 0px 10px;
        border-radius: 15px;
        align-items: center;
        display: flex;
        flex-direction: row;
        gap:2rem
    }

    #headshot {
        aspect-ratio: 1 1;
    }

    @media (max-width: 1000px) {
        #bg1, #bg3 {
            padding: 10px;
            flex-direction: column;
        }

        #bg2 {
            padding: 10px;
            flex-direction: column-reverse;

        }

    }

`;

// #################################################################################################







// For Home ########################################################################################

export const HomeSty = styled.div`
        width: 70vw;
        padding: 3px;

        img {
            max-height: 25vh;
            max-width: 25vh;
            border-radius: 15px;
        }

        #homeContent {
            width: 80%;
            padding: 2%;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap:2rem;
        }

        #headshot {
            aspect-ratio: 1 1;
        }

        .pBox {
                flex:1;
                min-width: 0;
                background-color:white;
                border-radius: 15px;
                padding: 1vh 2vw;

        }
        
        .heading {
            padding: 2vh 3vw;
            letter-spacing: 4px;
            font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }

        @media (max-width: 1000px) {
            width: 100%;
            

            #homeContent {
                flex-direction: column;
                margin: 0 auto;
            }
        
        
        }
    `

// ################################################################################################






//For Root ########################################################################################

export const PageDiv = styled.div`
    min-height: 100vh;
    border-sizing: border-box;
`

export const Wrapper = styled.div`

    width:80vw;
    margin: 0 auto;
    margin-top: -23px;
    background: whitesmoke;
    min-height: 100vh;
    display: flex;
    flex-direction:row;

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    
    }
`

// ###############################################################################################







//For Nav ########################################################################################

export const NavSty = styled.nav`
    background-color:lightgrey;
    width: 30%;

    ul {
        padding-left: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
    }
    
    li {
        border: black 2px solid;
        border-radius: 5px;
        background-color:whitesmoke;
        text-align: center;
        margin: 5% auto;
        width: 80%;
        transition: transform 0.3s ease-in-out;
    }
    li:hover {
        transform: scale(1.1);
    }

    a {
        padding: 1% 2%;
        font-size: calc(2.5px + 1.5vw);
        text-decoration: none;
        color: black;
    }

    @media (max-width: 1000px) {    
        width: 100%;

        li {
            margin: 0 2px;
        }

        Link {
            padding: .5% 1%;
        }
        
        ul {
            flex-direction: row;
            padding: 0 2%;
        }

    
    }    
`

// ###################################################################################################






// For Footer ######################################################################################## 

export const FooterSty = styled.footer`
    width: 80vw;
    margin: 0 auto;
    background-color:lightblue;
    color: red;
    padding:.5px;
    text-align: center;
    margin-bottom: -10px;
`;

// ####################################################################################################






// For Projects ########################################################################################

export const CalcDiv = styled.div`
    width: 70vw;
    padding: 3px;
    margin: 0 auto;

    h3 {
        text-align: center;
    }

    

    #pBox {
    padding: 10px;
    }

    #calc {
        max-width: 350px;
        margin: 0 auto;
        padding: 20px;
        background: linear-gradient(0deg, lightblue, skyblue);
        border-radius: 12px;
        box-shadow: 0 0 15px rgba(68, 128, 177, 0.7);
        color: white;
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    #calc label {
        float: left;
    }

    #calc input[type="number"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: none;
        border-radius: 6px;
        font-size: 1.1rem;
        font-weight: bold;
        color: black;
    }

    #calcBut {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap:5rem;
    }

    #calc button {
        background-color: lightblue;
        border: 2px solid white;
        border-radius: 6px;
        color: black;
        font-size: 1.3rem;
        margin: 4px 8px;
        padding: 10px 18px;
        width: 50px;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
        user-select: none;
        box-shadow: 0 0 15px lightblue;
    }

    #calc button:hover {
        background-color: azure;
        color: black;
        box-shadow: 0 0 15px rgba(19, 145, 248, 0.7);

    }

    /* Output */
    #calc #output {
    text-align: center;
    font-size: 1.7rem;
    font-weight: 900;
    padding: 10px 0;
    border-top: 2px solid #fff;
    letter-spacing: 2px;
    min-height: 40px;
    }


    img {
        max-height: 25vh;
        max-width: 25vh;
        border-radius: 15px;
        display:block;
        margin: 0 auto;
    }




    @media (max-width 1000px) { width: 100%; }    
`


export const HeadingDiv = styled.div`
    padding: 2vh 3vw;
    letter-spacing: 4px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

// ####################################################################################################