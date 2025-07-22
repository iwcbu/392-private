import { useState } from "react";
import { CalcDiv } from "./StyledMains";
import { HeadingDiv } from "./StyledMains";


export default function Projects() {
     

    const [a1, setA1] = useState("");
    const [b1, setB1] = useState("");

    const a2 = a1 === "" ? 0 : Number(a1);
    const b2 = b1 === "" ? 0 : Number(b1);
    const [result, setResult] = useState(0);


    return (
        <CalcDiv>
            <div id="certBox">
                    <HeadingDiv> 
                        <h2>Projects</h2>
                    </HeadingDiv>
                    <main>
                        <div>
                            <h3 id="tab">The Blue JS Calculator</h3>
                            <div id="container">
                                <div>
                                        <div id="calc">
                                            <label>
                                                First Number: 
                                                <input value={a1} onChange={e => setA1(e.target.value)}/>
                                            </label>
                                            <label>
                                                Second Number: 
                                                <input value={b1} onChange={e => setB1(e.target.value)}/>
                                            </label>

                                            <div id="calcBut">
                                                <button onClick={() => setResult(a2 + b2)}> + </button>
                                                <div><h4>First + Second</h4></div>
                                            </div>
                                            
                                            <div id="calcBut">
                                                <button onClick={() => setResult(a2 - b2)}> - </button>
                                                <div><h4>First - Second</h4></div>
                                            </div>

                                            <div id="calcBut">
                                                <button onClick={() => setResult(a2 * b2)}> * </button>
                                                <div><h4>First * Second</h4></div>
                                            </div>

                                            <div id="calcBut">
                                                <button onClick={() => setResult(a2 / b2)}> / </button>
                                                <div><h4>First / Second</h4></div>
                                            </div>

                                            <div id="calcBut">
                                                <button onClick={() => setResult(a2 ** b2)}> ** </button>
                                                <div><h4>First ^ Second</h4></div>
                                            </div>
                                            <h3 id="output" style={{color: result < 0 ? "red": "black" }}>Result: {(Math.floor(result*100))/100}</h3>
                                    </div>
                            </div>

                                <div>
                                    <p id="pBox">
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

                            <h3>Compiler Project</h3>
                            <div id="tab"> 
                                <img src="/imgs/bc2.png" alt="Compiler Project"/>
                                <div> 
                                    <p id="pBox">
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
        </CalcDiv>
    )
}