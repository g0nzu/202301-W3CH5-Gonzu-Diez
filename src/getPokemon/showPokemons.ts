import { fetchPokemons } from './getPokemon';
import { pokemonStructure } from '../models/pokemonType';
import './pokemons.scss';

const renderPokemons = (pokemons: pokemonStructure[]) => {
  const pokemonContainer = document.getElementById('pokemon-container');
  if (!pokemonContainer) {
    return;
  }

  pokemons.forEach((pokemon) => {
    const pokemonTemplate = `
      <div class="pokemon-card">
        <div>ID: ${pokemon.id}</div>
        <div>Name: ${pokemon.name}</div>
        <div>
          <img class="pokemon-img" src="${pokemon.image}" alt="${pokemon.name}" />
        </div>
        <div>Type: ${pokemon.type}</div>
      </div>
    `;
    pokemonContainer.insertAdjacentHTML('beforeend', pokemonTemplate);
  });
};

export const main = async (): Promise<void> => {
  const pokemons = await fetchPokemons();
  renderPokemons(pokemons);
};
