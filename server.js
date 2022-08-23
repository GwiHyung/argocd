'use strict';

const express = require('express');

// 상수
const PORT = 8080;
const HOST = '0.0.0.0';

// 앱
const app = express();
app.get('/', (req, res) => {
  res.send(' 업그레이드한다!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "77d1e53073395986e8f43b9d0912796d"; //open weather에서 내 API 키를 가져옴

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.4347442&lon=127.1365699&appid=77d1e53073395986e8f43b9d0912796d&units=metric`;
    //url 위치에 해당 경도와 위도를 제시하고 뒤에 나의 API키를 적음 , units=metric은 섭씨를 뜻함
    fetch(url) //fetch로 url을 가져옴
        .then((response) => response.json())
        .then((data) => {
          const weather = document.querySelector("#weather span:first-child");
          const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
  }

  function onGeoError() {
    alert("Can't find you. No weather for you.");

  }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
