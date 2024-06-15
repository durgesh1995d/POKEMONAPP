import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PokemonList from '../src/component/PokemonList';
import { useGetPokemonListQuery } from '../src/api/pokemonApi';

// Mock the API hook
jest.mock('../src/api/pokemonApi', () => ({
  useGetPokemonListQuery: jest.fn(),
}));

const mockNavigate = jest.fn();

const mockData = {
  results: [{ name: 'Bulbasaur' }, { name: 'Charmander' }],
};

describe('PokemonList', () => {
  it('displays loading state correctly', () => {
    useGetPokemonListQuery.mockReturnValue({ isLoading: true });
    const { getByText,toJSON } = render(
      <PokemonList navigation={{ navigate: mockNavigate }} />
    );
    expect(getByText('Loading...')).toBeTruthy();
  expect(toJSON()).toMatchSnapshot()
  });

  it('displays error state correctly', () => {
    useGetPokemonListQuery.mockReturnValue({ error: true, isLoading: false });
    const { getByText,toJSON } = render(
      <PokemonList navigation={{ navigate: mockNavigate }} />
    );
    expect(getByText('Error loading data')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot()
  });

  it('renders list of pokemons correctly', () => {
    useGetPokemonListQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
    });
    const { getByText,toJSON } = render(
      <PokemonList navigation={{ navigate: mockNavigate }} />
    );
    expect(getByText('Bulbasaur')).toBeTruthy();
    expect(getByText('Charmander')).toBeTruthy();
  expect(toJSON()).toMatchSnapshot()
  });

  it('navigates on press', () => {
    useGetPokemonListQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
    });
    const { getByText,toJSON } = render(
      <PokemonList navigation={{ navigate: mockNavigate }} />
    );
    fireEvent.press(getByText('Bulbasaur'));
    expect(mockNavigate).toHaveBeenCalledWith('PokemonDetail', {
      name: 'Bulbasaur',
    });
    expect(toJSON()).toMatchSnapshot()
  });
});
