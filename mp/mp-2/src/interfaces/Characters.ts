
export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    }
    
    gender: string;

}