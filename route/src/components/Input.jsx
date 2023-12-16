import React from 'react';
import {  useWeather } from '../context/Weather';

const Input = () =>{
    const weather = useWeather();
    // console.log(weather)
    return(
        <input className = 'ínput-field' 
        placeholder="Search Here" 
        value = {weather.searchCity}
        onChange = {(e) =>weather.setSearchCity(e.target.value)} />
    )
}

export default Input