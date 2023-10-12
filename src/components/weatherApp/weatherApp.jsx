import React, { useState } from 'react';
import './weatherApp.css';
import searchIcon from '../asset/search.png';
import cloudIcon from '../asset/cloud.png';
import humidityIcon from '../asset/humidity.png';
import windIcon from '../asset/wind.png';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import clearIcon from '../asset/clear.png'
import drizzleIcon from '../asset/drizzle.png'
import rainIcon from '../asset/rain.png'
import snowIcon from '../asset/snow.png'


const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState({
        humidity: 'N/A',
        wind: 'N/A',
        temperature: 'N/A',
        location: 'N/A'
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [weatherIcon, setWeatherIcon] = useState(cloudIcon);


    let apiKey = "f2c5e602932cf65101cdfd241a2e6569";
     console.log("=========>",errorMessage)

      
    const search = async () => {
        const element = document.querySelector(".cityInput");
        if (!element.value) {
            return;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.cod === 200) {
                setWeatherData({
                    humidity: data.main.humidity + "%",
                    wind: Math.floor(data.wind.speed) + " km/hr",
                    temperature: Math.floor(data.main.temp) + "°C",
                    location: data.name
                });
            } else {
                setErrorMessage(data.message || "Erro in Loading the Page");
            }
            if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n" ){
                setWeatherIcon(clearIcon);
            } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n" ){
                setWeatherIcon(cloudIcon);
            } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n" ){
                setWeatherIcon(drizzleIcon);
            } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n" ){
                setWeatherIcon(drizzleIcon);
            } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n" ){
                setWeatherIcon(rainIcon);
            } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n" ){
                setWeatherIcon(rainIcon);
            } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n" ){
                setWeatherIcon(snowIcon);
            } else {
                setWeatherIcon(clearIcon);
            }
        } catch (error) {
            setErrorMessage("Erro in Loading the Page");
        }
    };

    const getCurrentLocationWeather = async () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=Metric&appid=${apiKey}`;

            const response = await fetch(url);
            const data = await response.json();
            if (data.cod === 200) {
                setWeatherData({
                    humidity: data.main.humidity + "%",
                    wind: Math.floor(data.wind.speed) + " km/hr",
                    temperature: Math.floor(data.main.temp) + "°C",
                    location: data.name
                });
            } else {
                setErrorMessage(data.message || "Erro in Loading the Page");
            }
            if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n" ){
                setWeatherIcon(clearIcon);
            } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n" ){
                setWeatherIcon(cloudIcon);
            } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n" ){
                setWeatherIcon(drizzleIcon);
            } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n" ){
                setWeatherIcon(drizzleIcon);
            } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n" ){
                setWeatherIcon(rainIcon);
            } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n" ){
                setWeatherIcon(rainIcon);
            } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n" ){
                setWeatherIcon(snowIcon);
            } else {
                setWeatherIcon(clearIcon);
            }
        });
    };

    const handleCloseSnackbar = () => {
        setErrorMessage(""); 
      };

    return (
        <div className='container'>
            <Snackbar
      open={errorMessage === "city not found"} 
      autoHideDuration={3000} 
      onClose={handleCloseSnackbar} 
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleCloseSnackbar}
        severity="error"
      >
        {errorMessage}
      </MuiAlert>
    </Snackbar>
            <div className="topBar">
                <input type="text" className="cityInput" placeholder='Search' />
                <div className="searchIcon" onClick={search}>
                    <img src={searchIcon} alt="" />
                </div>
            </div>
            <div className="weatherImage">
                <img src={weatherIcon} alt="" />
            </div>
            <div className="weatherTemp">{weatherData.temperature}</div>
            <div className="weatherLocation">{weatherData.location}</div>
            <div className="dataContainer">
                <div className="element">
                    <img src={humidityIcon} alt="" className="icon" />
                    <div className="data">
                        <div>{weatherData.humidity}</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={windIcon} alt="" className="icon" />
                    <div className="data">
                        <div>{weatherData.wind}</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
            <button className="currentLocationButton" onClick={getCurrentLocationWeather}>
                Current Location Weather
            </button>
        </div>
    );
}

export default WeatherApp;
