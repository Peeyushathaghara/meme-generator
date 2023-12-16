import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from '../api'

const WeatherContext = createContext();

export const useWeather = () =>{
    return useContext(WeatherContext)
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchCurrentUserLocationData = (position) =>{
        navigator.geolocation.getCurrentPosition((position) =>{
            // console.log(position);
            getWeatherDataForLocation(position.coords.latitude, position.coords.longitude)
            .then((data) => setData(data))
        })
    
    }

    const fetchData = async () =>{
        const response = await getWeatherDataForCity(searchCity)
        setData(response);
    }

    return <WeatherContext.Provider value={{searchCity, data, setSearchCity, fetchData, fetchCurrentUserLocationData}}>{props.children}</WeatherContext.Provider>
}

