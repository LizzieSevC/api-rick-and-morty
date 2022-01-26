import React from "react";


export function Episode(props) {
    const { name, air_date, episode } = props;
    

    return (
    <div className="characterCard">
    <div className="characterInfo">
        <h3 className="episodeName">{name}</h3>
        <p className="episodeAirName"> {air_date} </p>
        <p className="episode"> {episode} </p>
    </div>
    </div>
    );
}