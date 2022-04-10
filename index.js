let weather={
  "apikey":"51747b13c9d02039f8ac95bbe69c2da2",
  fetchWeather:function(zipcode){
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",us&units=imperial&appid=51747b13c9d02039f8ac95bbe69c2da2"     
   
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
    
  },

  displayWeather:function(data){
    const { name,dt } = data;
    const { icon,description} = data.weather[0];
    const { temp, temp_min,temp_max,humidity,} = data.main;
    const { speed} = data.wind;
    const query = name
    console.log(name,dt,icon,description,temp,temp_min,temp_max,humidity,speed)
    document.querySelector(".zipcode").innerText = "Weather in " + name;
    document.querySelector(".date").innerText = (new Date(data.dt*1000));
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
    document.querySelector(".description").innerText =  description;
    document.querySelector(".temp").innerText =  "Current: " + temp + "°F";
    document.querySelector(".hightemp").innerText = " High: " + temp_max + "°F";
    document.querySelector(".lowtemp").innerText = " Low: " + temp_min + "°F";
    document.querySelector(".humidity").innerText =  "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/hr";
    
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },

};

  document
       .querySelector(".search button")
      .addEventListener("click", function() {
        weather.search();

         });
         
   document.querySelector(".search-bar").addEventListener("keyup", function(event) {
  if (event.key == "Enter") {
    weather.search();

  }
  
   });        

  function tempConverter(temp) {
    temp = parseFloat(temp)
    document.getElementById("Celcius").innerHTML= (temp-32)/1.8;

  };


 