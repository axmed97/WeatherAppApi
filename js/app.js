
var btn = document.getElementById('btn');
var apiKey = '83427fbc165725eca33436bdc3f08cb8';
var city = document.querySelector('.city');
var desc = document.querySelector('.description');
var image = document.querySelector('.icon')
var temperature = document.querySelector('.temperature');
var humid = document.querySelector('.humidity');
var wind = document.querySelector('.wind');

window.onload = () => {
    var endPoint = `http://api.openweathermap.org/data/2.5/weather?q=Baku&units=metric&appid=${apiKey}`

    fetch(endPoint)
        .then(response => response.json())
        .then(data => {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            console.log(name, icon, description, temp, humidity, speed);
            city.innerHTML = `Weather in ${name}`;
            image.src = `https://openweathermap.org/img/wn/${icon}.png`;
            desc.innerHTML = description.toUpperCase();
            temperature.innerHTML = temp + "°C";
            humid.innerHTML = "Humidity: " + humidity + "%";
            wind.innerHTML = "Wind speed: " + speed + " km/h";
        });
}


btn.onclick = function () {
    var searchInput = document.querySelector('.search-input').value;
    var endPoint = `http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=${apiKey}`

    fetch(endPoint)
        .then(response => response.json())
        .then(data => {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            console.log(name, icon, description, temp, humidity, speed);
            city.innerHTML = `Weather in ${name}`;
            image.src = `https://openweathermap.org/img/wn/${icon}.png`;
            desc.innerHTML = description.toUpperCase();
            temperature.innerHTML = temp + "°C";
            humid.innerHTML = "Humidity: " + humidity + "%";
            wind.innerHTML = "Wind speed: " + speed + " km/h";
            
        }).catch(err => {
            console.log(err);
        });
}

