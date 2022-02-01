import React from "react";
import "./Character.css";

export function Character(props) {
const { avatar, name, status, species, gender} = props;

return (
<div className="characterCard">
    <div className="characterImg">
        <img src={avatar} alt="{name}" />
    </div>

    <div className="characterInfo">
        <h3 className="characterName"> Name:<br/> {name} </h3>
        <p className="characterText"> Status: {status} </p>
        <p className="characterText"> Species: {species} </p>
        <p className="characterText"> Gender: {gender} </p>
    </div>
</div>
    );
}

