const jokebutton = document.querySelector("#joke");

async function getJoke() {
  try {
    const datafetch = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await datafetch.json();
    console.log(`${data.setup}`);
    console.log(`${data.punchline}`);
    document.getElementById("setup").textContent = data.setup;
    document.getElementById("punchline").textContent = data.punchline;
  } catch (error) {
    console.log(`the error is ${error}`);
  }
}

jokebutton.addEventListener("click", getJoke);
