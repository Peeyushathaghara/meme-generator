import React from 'react';
// import {  useWeather } from '../context/Weather';

const Button = (props) =>{
    return(
        <button className = 'btn' onClick={props.onClick}>{props.value}</button>
    )
}

export default Button;