const key = "851cdaac79e5d5cb7dbb4aa7a7e918b8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBar = document.querySelector(".search_bar input")
const searchButton = document.querySelector(".search_bar button")
const weatherIcon = document.querySelector(".weather_icon")

async function getWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${key}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    //for the weather icon
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloudy.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/misty.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
}


//Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    //This function is called after the browser has loaded the web page
  
    //add listener to buttons
    document.getElementById('searchIconBtn').addEventListener('click', searchForCity)
    
    //add keyboard handler for the document as a whole, not separate elements.
    document.addEventListener('keydown', handleKeyDown)
    
  })

function searchForCity(){

    let cityName = document.getElementById('searchText').value.trim()
 
    if(cityName === '') return //do nothing

    getWeather(cityName);
}

function handleKeyDown(event) {
    const ENTER_KEY = 13 //keycode for enter key
    if (event.keyCode === ENTER_KEY) {
      searchForCity()
      return false //don't propogate event
    }
  }

           

            