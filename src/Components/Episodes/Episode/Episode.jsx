import React, { useState, useEffect } from "react";
import "./Episode.css";

export function Episode(props) {
    const { name, airDate, episode, charactersList } = props;
    const [character, setCharacter] = useState([{}]);
    useEffect(async () => {
    charactersList.map(async (items) => {
    const res = await fetch(items);
    const characterJSON = await res.json();
    setCharacter((prevState) => [...prevState, characterJSON]);
    });
    }, []);
    return (
    <div className="episodeCard">
    <div className="episodeInfo">
        <h1>{name}</h1>
        <h3>{episode}</h3>
        <p>{airDate}</p>
        <div className="charactersCard">
        <ul>
            {character.map((item) => (
        <li>{item.name}</li>
            ))}
        </ul>
        </div>
    </div>
    </div>
    );
}