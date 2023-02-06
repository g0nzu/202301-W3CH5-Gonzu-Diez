import { Menu } from './menu';
import '@testing-library/jest-dom';

describe('Menu', () => {
  test('should render menu with correct options', () => {
    const menuOptions = [
      { path: '/home', label: 'Home' },
      { path: '/about', label: 'About' },
    ];
    const menu = new Menu('#menu', menuOptions);
    const expectedTemplate = `
      <nav class="menu"><ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul></nav>
    `;
    expect(expectedTemplate).toBeInstanceOf(menu);
  });
});
