/* eslint-disable no-new */
import { Header } from './header/header';
import { menuStructure } from './models/pokemonType';
import { Menu } from './menu/menu';
import { main } from './getPokemon/showPokemons';

export const MenuOptions: menuStructure[] = [
  { label: 'Inicio', path: '/home' },
  { label: 'Fav', path: '/tasks' },
];

new Header('#header');
new Menu('#header', MenuOptions);
main();
