import { ArtProps } from "@/types";

const ART_API_KEY = process.env.API_KEY

export default async function getArt(): Promise<ArtProps[] | undefined | null> {
    try {

        const res = await fetch(
            `https://api.harvardartmuseums.org/object?&apikey=${ART_API_KEY}`

        );

        if (res.status === 429) { return null; }
        if (res.status !== 200) { return undefined; }

        const jsonRes = await res.json();
        
        if (!jsonRes.records || jsonRes.records.length === 0) {
        console.log("no records found.");
        return null;
        }

        console.log("records length:", jsonRes.records.length);

        const filteredrecords = jsonRes.records.filter((r: any) =>
        r.primaryimageurl && r.objectid
        );

        if (filteredrecords.length === 0) {
            console.log("no record with image, title, and description.");
            return null;
        }
        
        console.log("Test for record here");
        console.log(filteredrecords);
        console.log(filteredrecords.length)
        
        if (!filteredrecords) { return null; }

        return filteredrecords

    } catch (error) {
        console.log("error occurred:", error);
        return undefined;
    }
}
