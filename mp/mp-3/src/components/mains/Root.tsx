import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import Home from "./Home";
import Edu from "./Edu";
import Bg from "./Bg";
import Cert from "./Cert"
import Ref from "./Ref";
import {Routes, Route} from "react-router";
import Projects from "./Projects";
import { PageDiv } from "./StyledMains";
import { Wrapper } from "./StyledMains";



export default function Root() {
    return (
        <PageDiv>
            <Header/>
            <Wrapper>
                <Nav />
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/education.html"} element={<Edu/>}/>
                    <Route path={"/background.html"} element={<Bg/>}/>
                    <Route path={"/certifications.html"} element={<Cert/>}/>
                    <Route path={"/references.html"} element={<Ref/>}/>
                    <Route path={"/projects.html"} element={<Projects/>}/>
                </Routes>
            </Wrapper>
            <Footer/>
        </PageDiv>
    )
}