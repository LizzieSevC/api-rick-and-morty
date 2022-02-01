import React from 'react';
import { useState, useEffect } from 'react';
import { Character } from './Character/Character';
import { Button } from '../Button/Button';
/* import {characterList} from './CharacterList' */


export function Characters() {
const [ characters, setCharacters ] = useState([]); /* 2 values, current and fx that updates it */
const [info, setInfo]= useState([]);

const url = "https://rickandmortyapi.com/api/character";

const fetchApi = async (url) => {
    const res = await fetch (url); /* response */
    const characterJSON = await res.json(); /* .json make it a json */
    const { results, info } = await characterJSON; /* the two blocks of info from the API are saved on results, info */
    setCharacters(results);
    setInfo(info);
}

const onNext = () =>{
    fetchApi(info.next)
}

const onPrev = () =>{
    fetchApi(info.prev)
}

const onFemale = () =>{
    fetchApi("https://rickandmortyapi.com/api/character/?gender=female")
}

const onMale = () =>{
    fetchApi("https://rickandmortyapi.com/api/character/?gender=male")
}

const onUnknown = () =>{
    fetchApi("https://rickandmortyapi.com/api/character/?gender=unknown")
}

const onGenderless = () =>{
    fetchApi("https://rickandmortyapi.com/api/character/?gender=genderless")
}

const noFilter = () =>{
    fetchApi("https://rickandmortyapi.com/api/character/")
}

useEffect(() =>{ /* used with APIs, 
    renders for the first time and every time is refreshed, 
    takes a function as it's argument */
    fetchApi(url)
    }, []) /* empty, only one time render from the API */

    return(
<>
<div className='containerButtons'>
        <Button name='Prev' onChange={onPrev} page={info.prev}/>
        <Button name='Next' onChange={onNext} page={info.next}/>
        <Button name='Female' onChange={onFemale} page={true}/>
        <Button name='Male' onChange={onMale} page={true}/>
        <Button name='Unknown' onChange={onUnknown} page={true}/>
        <Button name='Genderless' onChange={onGenderless} page={true}/>
        <Button name='Clean filters' onChange={noFilter} page={true}/>
</div>

        <div className='container_cards'>        
            {characters.map(
                (character) => (
            <Character /* *materializa* creates a tag so we can show the info */
            key={character.id}
            name={character.name}
            avatar={character.image}
            status= {character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            />
        ))}
        </div>        

        <div className='containerButtons'>
            <Button name='Prev' onChange={onPrev} page={info.prev}/>
            <Button name='Next' onChange={onNext} page={info.next}/>

        </div>
        </>
    );
}


