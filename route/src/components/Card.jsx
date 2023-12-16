import React from 'react'
import {  useWeather } from '../context/Weather';

const Card = () =>{
    const weather = useWeather();
    return(
        <div className = 'card'>
            <img src = {weather?.data?.current?.condition?.icon} />
            <h4>{ weather?.data?.current?.temp_c } C</h4>
            <h5>{ weather?.data?.location?.region }, { weather?.data?.location?.country }</h5>

        </div>
    )
}
export default Card;