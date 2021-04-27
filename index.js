const pokemonContainer = document.querySelector('.pokemon-container');

fetch("http://localhost:3000/pokemons")
    .then(response => response.json())
    .then(pokemons => displayPokemons(pokemons))


function displayPokemons(pokemons) {
    console.log('display pokemons')
    pokemons.forEach(pokemon => showPokemon(pokemon));
}

function showPokemon(pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name;
    
    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.sprites.other["official-artwork"].front_default

    pokemonCard.append(pokemonName, pokemonImage);
    pokemonContainer.append(pokemonCard);
}