import {Link} from "react-router";
import { FooterSty } from "./mains/StyledMains";

export default function Footer() {
    return (
        <FooterSty>
            <h6>All Rights Reserved by Ian Campbell <Link to="./credits.html">Credits</Link> ©</h6>
        </FooterSty>
    )
}