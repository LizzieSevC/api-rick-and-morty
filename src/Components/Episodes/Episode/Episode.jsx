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
    }, [charactersList]);
    return (
        <>
<div className="episodesCard">

    <div className="episodeInfo">
        <h3 className="characterName">Name: {name}</h3>
        <p> Episode: {episode}</p>
        <p> Air date: {airDate}</p> <br/>
        <h4> Characters in this episode: </h4> 
    </div>

        <div className="container_Cards">
        {character.map((item) => (
            <div className="characterEpisode">
        <h4 className="characterText">{item.name}</h4>
        <img src={item.image} alt={item.name} />
        </div>
        ))}
        </div>

</div>
    </>
    );
}

