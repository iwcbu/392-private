import {Link} from "react-router";
import { NavSty } from "./mains/StyledMains";



export default function Nav() {
    return (
        <NavSty>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/background.html`}>Background</Link></li>
                <li><Link to={`/projects.html`}>Projects</Link></li>
                <li><Link to={`/certifications.html`}>Certifications</Link></li>
                <li><Link to={`/education.html`}>Education</Link></li>
                <li><Link to={`/references.html`}>References</Link></li>
            </ul>
        </NavSty>
    )
}