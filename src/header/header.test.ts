import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header component', () => {
  test('should render with title and no errors', () => {
    const mockTitle = 'Test';
    const element = new Header('body', mockTitle);
    expect(element).toBeInstanceOf(Header);
    const h1 = screen.getByText(mockTitle);
    expect(h1).toBeInTheDocument();
  });
});
