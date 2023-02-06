/* eslint-disable no-unused-vars */
import { MenuOptions } from '../index';
import { menuStructure } from '../models/pokemonType';
import { Component } from '../components/mainComponent';
import './menu.scss';

export class Menu extends Component {
  constructor(public selector: string, public menuOptions: menuStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    const items = this.menuOptions
      .map((item) => `<li><a href="${item.path}">${item.label}</a></li>`)
      .join('\n');
    return `
    <nav class="menu"><ul>${items}</ul></nav>
    `;
  }
}
