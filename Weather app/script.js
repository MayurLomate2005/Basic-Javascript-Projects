const btn = document.querySelector("#weatherbtn");
const cities = ["mumbai", "pune", "nashik", "nagpur", "ahmednagar"];
const apiKey = "e04b270359e30ef4abfc12fed6c1fa4c";
const info = document.querySelector("#info");

async function getinfo() {
  const city = document.querySelector("#inputData").value.trim().toLowerCase();

  if (cities.includes(city)) {
    info.innerHTML = `✅ Yes! <strong>${city}</strong> is available in the database.<br>Fetching weather...`;

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

      info.innerHTML += `
        <br><br>
        🌡️ Temperature: <strong>${data.main.temp}°C</strong><br>
        🌥️ Condition: <strong>${data.weather[0].description}</strong><br>
        💧 Humidity: <strong>${data.main.humidity}%</strong><br>
        🌬️ Wind: <strong>${data.wind.speed} m/s</strong>
      `;
    } catch (error) {
      info.innerHTML = `⚠️ Error: ${error.message}`;
    }
  } else {
    info.innerHTML = `❌ No! <strong>${city}</strong> is not available in the database.`;
  }
}

btn.addEventListener("click", getinfo);
