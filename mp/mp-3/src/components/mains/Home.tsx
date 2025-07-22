import { HomeSty } from "./StyledMains";


export default function Home() {
    return (
        <HomeSty>
            <div id="homeBox">
                <div className="heading">
                    <h2>Home</h2>
                </div>
                <main>
                    <div id="homeContent">
                        <img id="headshot" src="src/components/mains/imgs/headshot.jpeg" alt="Headshot of Ian"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam,
                            et suscipit error aperiam doloremque assumenda. Odio esse fugit perspiciatis.
                            Dicta corporis deleniti nisi quisquam porro rerum ullam harum. Earum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ad facere,
                            debitis, repudiandae quod perferendis tempora optio sunt reprehenderit
                            quaerat iste incidunt neque libero ducimus. Nobis quisquam laudantium
                            cum tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Minus, ab ut eum illum odio eos nesciunt recusandae. Dolor deserunt
                            quas accusantium, accusamus libero exercitationem quae odit illum
                            delectus veritatis eligendi.</p>
                    </div> 
                </main>
            </div>
        </HomeSty>
        
    )
}