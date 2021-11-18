import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Pokemon = () => {

    const [num , setNum] = useState();
    const [name , setName] = useState();
    const [moves , setMoves] = useState();

    useEffect(() => {
        async function  getData(){
            const res = await axios (`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    });
    return (
        <>
            <h1>Pokemon {num}</h1>
            <h1>Name {name}</h1>
            <h1>Moves {moves}</h1>
            <select value={num} onChange = {(event)=> {
                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">5</option>
            </select>
        </>
    )
};

export default Pokemon;