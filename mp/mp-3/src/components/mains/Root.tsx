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


export default function Root() {
    return (
        <>
            <Header/>
            <Nav />
            <Routes>
                <Route
                    path={`/`}
                    element={<Home/>}
                />
                <Route
                    path={`/background.html`}
                    element={<Bg/>}
                />
                <Route
                    path={`/project.html`}
                    element={<Projects/>}
                />
                <Route
                    path={`/certifications.html`}
                    element={<Cert/>}
                />
                <Route  
                    path={`/education.html`}
                    element={<Edu/>}
                />
                <Route
                    path={`/references.html`}
                    element={<Ref/>}
                />
            </Routes>
            <Footer/>
        </>
    )
}