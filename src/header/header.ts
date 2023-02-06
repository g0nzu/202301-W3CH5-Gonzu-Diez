/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Component } from '../components/mainComponent';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'Pokedex') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <header id="header">
        <h1 class="header__text">${this.title}</h1>
      </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
