// Obtener el nombre de tu pokemon favorito utilizando async/await o promesas
async function getPokemon(name) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    let data = await response.json()
    console.log(data)
}

getPokemon("ditto");

// const axios = require('axios')

// async function getPokemon(nombre) {
//     try {
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
//         console.log(response.data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getPokemon("ditto")


// Obtener el nombre de 15 pokemones
async function getPokemons() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
    let data = await response.json();
    data.results.map(pokemon => console.log(pokemon.name))
}

getPokemons();


// Obtener un listado de 15 pokemones. De estos 15, mostrar por consola los que tengan peso mayor a 150
async function getPokemonsWeight150() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
    let data = await response.json();
    let urls = data.results.map(pokemon => pokemon.url);
    for (i = 0; i <= urls.length - 1; i++) {
      let res = await fetch(urls[i]);
      pokemon = await res.json();
      if (pokemon.weight > 150) {
            console.log(pokemon.name, pokemon.weight);
      }
    }
}

getPokemonsWeight150();