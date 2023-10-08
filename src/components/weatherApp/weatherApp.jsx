import React, { useState } from 'react'
import './weatherApp.css'
import searchIcon from '../asset/search.png'
import cloudIcon from '../asset/cloud.png'
import humidityIcon from '../asset/humidity.png'
import windIcon from '../asset/wind.png'

const WeatherApp =  ({}) => {

    let apiKey = "f2c5e602932cf65101cdfd241a2e6569";

const search = async () =>{
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value===""){
        return 0
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`
    let response = await fetch(url);
    let data = await response.json()

    const humidity = document.getElementsByClassName("humidityPercentage");
    const wind = document.getElementsByClassName("windRate");
    const temperature = document.getElementsByClassName("weatherTemp");
    const location = document.getElementsByClassName("weatherLocation");

    humidity[0].innerHTML = data.main.humidity+"%";
    wind[0].innerHTML = data.wind.speed+" km/hr";
    temperature[0].innerHTML = data.main.temp+ "°C";
    location[0].innerHTML = data.name;
}

  return (
    <div className='container'>
        <div className="topBar">
        <input type="text" name="" id="" className="cityInput" placeholder='Search'/>
        <div className="searchIcon" onClick={()=>{search()}}>
            <img src={searchIcon} alt="" />
        </div>
        </div>
        <div className="weatherImage">
            <img src={cloudIcon} alt="" />
        </div>
        <div className="weatherTemp">24°C</div>
        <div className="weatherLocation">New Jersey</div>
        <div className="dataContainer">
            <div className="element">
                <img src={humidityIcon} alt="" className="icon" />
                <div className="data">
                    <div className="humidityPercentage">65%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={windIcon} alt="" className="icon" />
                <div className="data">
                    <div className="windRate">18 km/hr</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp;