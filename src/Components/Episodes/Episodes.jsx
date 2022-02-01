import React, { useState, useEffect } from "react";
import { Episode } from "./Episode/Episode";
import "./Episodes.css";
import { Button } from '../Button/Button';

export function Episodes() {
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState([]);

    const url = "https://rickandmortyapi.com/api/episode/";

    const fetchApi = async (url) => {
    const res = await fetch(url);
    const episodesJSON = await res.json();
    const { results, info } = await episodesJSON;
    setInfo(info);
    setEpisodes(results);
    };
    useEffect(() => {
    fetchApi(url);
    }, []);
    
    const onNext = () =>{
        fetchApi(info.next)
    }
    const onPrev = () =>{
        fetchApi(info.prev)
    }
    return (
        <>
    <div className="containerButtons">
        <Button name='Prev' onChange={onPrev} page={info.prev}/>
        <Button name='Next' onChange={onNext} page={info.next}/>
    </div>
    <div className="container_episodes">
        {episodes.map((episode) => (
            <Episode
            key={episode.id}
            name={episode.name}
            airDate={episode.air_date}
            episode={episode.episode}
            charactersList={episode.characters}
        /> 
        ))}
    </div>

    <div className="containerButtons">
        <Button name='Prev' onChange={onPrev} page={info.prev}/>
        <Button name='Next' onChange={onNext} page={info.next}/>
    </div>
    </>
    );
}
