import react from "react";
import {Episode} from "./Episode/Episode"
import { useState, useEffect } from 'react';

export function Episodes(){

const [episodes, setEpisodes] = useState([]);
const [info, setInfo]= useState([]);

const url = "https://rickandmortyapi.com/api/episode";

const fetchApi = async (url) => {
    const res = await fetch (url);
    const episodeJSON = await res.json();
    const { results, info } = await episodeJSON;
    setEpisodes(results);
    setInfo(info);
}


useEffect(() =>{
    fetchApi(url)
    }, [])

    return(
        <div>
            {episodes.map(
                (episode) => (
            <Episode
            key={episode.id}
            name={episode.name}
            air_date={episode.air_date}
            status= {episode.episode}
            />
        ))}
        </div>
    );

;
}