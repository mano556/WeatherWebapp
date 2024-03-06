let cityname=document.getElementById("cityname")
// let result=document.getElementById("result")




let url= "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
weather=(city_name)=>{
 
// let city_name="chennai"
let API_KEY="d31b09cb5913be0e5b2449874bdf47cb"
    let FULL_URL=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city_name}&appid=${API_KEY}`
fetch(FULL_URL).
then(response=>response.json()).
then(res=>{
    console.log(res)
    document.querySelector(".cityname").innerHTML="City name : "+res.name
document.querySelector(".temp").innerHTML="Temperature : "+Math.round(res.main.temp )+"  ° C"
document.querySelector(".humidity").innerHTML=" Humidity: "+res.main.humidity + " %"
document.querySelector(".pressure").innerHTML="Pressure : "+res.main.pressure +" pa"
document.querySelector(".windspeed").innerHTML="windspeed : "+res.wind.speed +" km/h"
})


}

