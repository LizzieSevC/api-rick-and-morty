import React, { useState, useEffect } from "react";
import { Episode } from "./Episode/Episode";
import "./Episodes.css";

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

    return (
    <article id="articleEpisodes">
    <div className="episode">
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
    </article>
    );
}
