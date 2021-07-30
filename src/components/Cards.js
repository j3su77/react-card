import React, { useEffect, useState } from "react";
import Card from "./Card";
import image1 from "../assets/image1.jpg";


const InitialCards = [
    {
        id:"",
        name: "name 1",
        gender: "no presenta",
        image: image1,
    }]


const Cards = () => {
    const [characters, setCharacters] = useState(InitialCards)

    const loadData = async () => {
        const response = await fetch("https://api-flask1.herokuapp.com//teams");
        const data = await response.json();
        setCharacters(data.teams)
     
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                {characters.map((character) => (
                    <div className="col-md-3" key={character.id}>
                        <Card name={character.name}  image={character.image} content={character.content} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
