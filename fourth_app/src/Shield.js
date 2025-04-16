import { useState } from "react";

export function Avenger() {

    const[name,setName]=useState("Steve Roger")
    const [heroic_name,setHeroicName] = useState("Captain America")

    const changeName = () => {
        setName("Tony Stark")
        setHeroicName("Ironman")
    }

    return(
        <>
        <h1>Hello, {name} your Heroic name is {heroic_name}</h1>
        <button onClick={changeName}>changeName</button>
        </>
    )
}