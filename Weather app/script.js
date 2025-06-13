const btn = document.querySelector("#weatherbtn");
const cities = ["mumbai", "pune", "nashik", "nagpur", "ahmednagar"];
const apiKey = "e04b270359e30ef4abfc12fed6c1fa4c";

async function getinfo() {
  cities.forEach(async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`Error fetching weather for ${city}`);
      }

      const data = await response.json();
      console.log(`The weather in ${city} is:`);
      console.log(`🌡️ Temp: ${data.main.temp}°C`);
      console.log(`🌥️ Condition: ${data.weather[0].description}`);
      console.log(`💧 Humidity: ${data.main.humidity}%`);
      console.log(`🌬️ Wind: ${data.wind.speed} m/s`);
      console.log("------------------------");
    } catch (error) {
      console.error(error.message);
    }
  });
}

// Trigger when button is clicked
btn.addEventListener("click", getinfo);
