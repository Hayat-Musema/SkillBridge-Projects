
const apiKey = "1d755474ceb9b2786697c4e89109d010";

async function getWeather(city) {
  try {
   
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(weatherUrl);
    const data = await response.json();

    document.getElementById("city").innerText = data.name.toUpperCase();
    document.getElementById("temp").innerText = Math.round(data.main.temp) + "°";
    document.getElementById("desc").innerText = data.weather[0].description;

    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind").innerText = data.wind.speed + " km/h";
    document.getElementById("visibility").innerText = (data.visibility / 1000) + " km";

   
    const lat = data.coord.lat;
    const lon = data.coord.lon;

   
const uvUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

const uvResponse = await fetch(uvUrl);
const uvData = await uvResponse.json();

console.log("UV DATA:", uvData); 

if (uvData.current && uvData.current.uvi !== undefined) {
  document.getElementById("uv").innerText = uvData.current.uvi;
} else {
  document.getElementById("uv").innerText = "N/A";
}
   
    const now = new Date();
    document.getElementById("date").innerText =
      now.toDateString() + " | " + now.toLocaleTimeString();

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


function selectCity(element, city) {
  document.querySelectorAll(".nav span").forEach(el => el.classList.remove("active"));
  element.classList.add("active");
  getWeather(city);
}


document.getElementById("search").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const city = this.value;
    getWeather(city);
  }
});

getWeather("Addis Ababa");

