import { CertSty } from "./StyledMains";


export default function Cert() {
    return (
        <CertSty>
            <div id="certBox">
                <div id="heading">
                    <h2>Certifications</h2>
                </div>
                <main>
                    <div id="certContent">
                        
                        <div id="cert">
                            <img id="certImg" src="src/components/mains/imgs/cert1.png" alt="HTML and CSS Specialist Certification"/>
                            <div className="pBox">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam, 
                                    et suscipit error aperiam doloremque assumenda. Odio esse fugit perspiciatis. 
                                    Dicta corporis deleniti nisi quisquam porro rerum ullam harum. Earum?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ad facere, 
                                    debitis, repudiandae quod perferendis tempora optio sunt reprehenderit 
                                    quaerat iste incidunt neque libero ducimus. Nobis quisquam laudantium 
                                    cum tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Minus, ab ut eum illum odio eos nesciunt recusandae. Dolor deserunt 
                                    quas accusantium, accusamus libero exercitationem quae odit illum 
                                    delectus veritatis eligendi.
                                </p>
                            </div>
                        </div>

                        <div id="cert">
                            <img id="certImg" src="src/components/mains/imgs/cert2.png" alt="JS Specialist Certification"/>
                            <div className="pBox">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam,
                                    et suscipit error aperiam doloremque assumenda. Odio esse fugit perspiciatis.
                                    Dicta corporis deleniti nisi quisquam porro rerum ullam harum. Earum?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ad facere,
                                    debitis, repudiandae quod perferendis tempora optio sunt reprehenderit
                                    quaerat iste incidunt neque libero ducimus. Nobis quisquam laudantium
                                    cum tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Minus, ab ut eum illum odio eos nesciunt recusandae. Dolor deserunt
                                    quas accusantium, accusamus libero exercitationem quae odit illum
                                    delectus veritatis eligendi.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </CertSty>
    )
}