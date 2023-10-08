import React from 'react'
import './weatherApp.css'
import searchIcon from '../asset/search.png'
import cloudIcon from '../asset/cloud.png'
import humidityIcon from '../asset/humidity.png'
import windIcon from '../asset/wind.png'



const WeatherApp = () => {
    let apiKey = "f2c5e602932cf65101cdfd241a2e6569";

const search = () =>{
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value===""){
        return 0
    }
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
                    <div className="humidity">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={windIcon} alt="" className="icon" />
                <div className="data">
                    <div className="humidityPercentage">18 km/hr</div>
                    <div className="humidity">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp