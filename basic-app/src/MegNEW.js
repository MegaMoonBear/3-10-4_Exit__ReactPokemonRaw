
// Quick steps: how to update client fetch URL to match server entrypoint
    // 1) Find your server mount point (example: app.use('/api', teamRoutes) in server.js).
    // 2) If mounted at '/api', call fetch('/api/team/3') from the client. If mounted at '/team', call fetch('/team/3').
    // 3) If the server runs on another origin (http://localhost:3000), include the origin: fetch('http://localhost:3000/team/3').
    // 4) Example syntax:
        //    // mounted at '/team'
        //    fetch(`/team/${id}`).then(...)
        //    // mounted at '/api'
        //    fetch(`/api/team/${id}`).then(...)
        //    // remote server
        //    fetch(`https://example.com/team/${id}`).then(...)
import './index.css';
import './index.js';

console.log("Index.js linked successfully");

// Helper: return random integer between min and max inclusive
function getRndPokID(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get DOM elements safely
const showOnePokemButtonHTML = document.querySelector("#showOnePokemButton");
//const refreshJokeButtonHTML = document.querySelector("#refreshJokeButton");  // Cut since only 1 Pokemon card (vs. joke's 2 as Q&A) 
const setup = document.querySelector("#pokemonSetup");

if (showOnePokemButtonHTML) {
    showOnePokemButtonHTML.addEventListener("click", function () {
        // Placeholder for show-one-pokemon behavior
        console.log('Show one pokemon clicked');
    });
}

 // Cut since only 1 Pokemon card (vs. joke's 2 as Q&A) 
        // if (refreshJokeButtonHTML) {
        //     refreshJokeButtonHTML.addEventListener("click", function () {
        //         console.log("Refreshing Pokémon data");


// Example fetch to the API endpoint. If the endpoint supports query by id,
// use the random id; otherwise this will fetch the root and try to parse JSON.
const id = getRndPokID(1, 10);
const url = `https://cs-pokemon-api-2.onrender.com/team/${id}`; // adjust path if API differs

fetch(url)
    .then(function (response) {
        if (!response.ok) throw new Error('Network response was not ok: ' + response.status);
        return response.json();
    })
    .then(function (pokemonData) {
        console.log(pokemonData);
        if (setup && pokemonData && pokemonData.setup) {
            setup.textContent = pokemonData.setup;
        } else if (setup && typeof pokemonData === 'string') {
            // If API returns a plain string
            setup.textContent = pokemonData;
        }
    })
    .catch(function (error) {
        console.log("Error fetching Pokémon data:", error);
    });


