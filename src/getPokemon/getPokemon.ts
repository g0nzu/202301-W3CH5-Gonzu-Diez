import { pokemonStructure } from '../models/pokemonType';

export const fetchPokemons = async (): Promise<pokemonStructure[]> => {
  const pokemons: pokemonStructure[] = [];
  for (let i = 1; i <= 20; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemonData = await response.json();
    const pokemonType = pokemonData.types
      .map((poke: { type: { name: any } }) => poke.type.name)
      .join(', ');
    pokemons.push({
      id: pokemonData.id,
      name: pokemonData.name,
      image: pokemonData.sprites.front_default,
      type: pokemonType,
    });
  }

  return pokemons;
};
