import React from "react";
import "./Character.css";

export function Character(props) {
const { avatar, name, status, species, gender, origin } = props;

return (
    <div className="characterCard">
    <div className="characterImg">
        <img src={avatar} alt="{'image' +name}" />
    </div>

    <div className="characterInfo">
        <h3 className="characterName">{name}</h3>
        <p className="characterText"> {status} </p>
        <p className="characterText"> {species} </p>
        <p className="characterText"> {gender} </p>
        <p className="characterText"> {origin} </p>
    </div>
    </div>
    );
}
