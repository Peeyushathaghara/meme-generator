const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=35c41aefb37d47f9b3731755231312'

export const getWeatherDataForCity= async (city)=>{
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
    return await response.json();
}

// const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=35c41aefb37d47f9b3731755231312'

export const getWeatherDataForLocation= async (lat, long)=>{
    const response = await fetch(`${baseUrl}&q=${lat}&q=${long}&aqi=yes`)
    return await response.json();
}