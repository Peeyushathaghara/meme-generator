import Card from "./components/Card";
import Input from "./components/Input"
import Button from "./components/Button"
import { useEffect } from "react";
import {  useWeather } from './context/Weather';
import './App.css';


function App() {
  const weather = useWeather();

  useEffect(() =>{
    weather.fetchCurrentUserLocationData();
  }, [])
  // console.log(weather)
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick = {weather.fetchData}
      value="Search"/>
      <Card />
      <Button value="Refresh"/>
    </div>
  );
}

export default App;
