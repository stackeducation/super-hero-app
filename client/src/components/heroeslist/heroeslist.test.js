import { render, screen } from '@testing-library/react';
import HeroesList from './heroeslist.mocks'

test('It renders the unordered list', () => {
  render(<HeroesList/>);
  const listElement = screen.getByRole('list');
  expect(listElement).toBeInTheDocument();
});

test('It renders two list items when given two heroes', () => {
  render(<HeroesList/>);
  const listItemElements = screen.getAllByRole('listitem');
  expect(listItemElements).toHaveLength(2);
});

test('It renders links inside the list', () => {
  render(<HeroesList/>);
  const linkElements = screen.getAllByRole('link')
  expect(linkElements).toHaveLength(2)
});

test('It has both heroes listed', () => {
  render(<HeroesList/>);
  const captainAmericaElement = screen.getByText('Captain America')
  const spiderManElement = screen.getByText('Spider-Man')
  expect(captainAmericaElement).toBeInTheDocument()
  expect(spiderManElement).toBeInTheDocument()
});

