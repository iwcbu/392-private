import type { character } from "../type/types.ts"


export default function Characters({data}: {data:character}) {

    return  (
        <>
            {data.map((character)=> 
                <div key={character.key}> 
                    <img src={character.image} alt={character.name} />
                </div>
            )}
        
        </>
    )
}