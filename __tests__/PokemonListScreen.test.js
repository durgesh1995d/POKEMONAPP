// __tests__/PokemonListScreen.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import PokemonListScreen from '../src/screens/PokemonListScreen';

// Mock the API hook
jest.mock('../src/api/pokemonApi', () => ({
  useGetPokemonListQuery: jest.fn().mockReturnValue({}),
}));

// Mock the API hook
jest.mock('@reduxjs/toolkit/query/react', () => {
  return { useGetPokemonByNameQuery: jest.fn() };
});

test('renders PokemonListScreen correctly', () => {
  const navigation = { navigate: jest.fn() }; // Mock navigation prop

  const { getByTestId, toJSON } = render(
    <PokemonListScreen navigation={navigation} />
  );

  expect(getByTestId('PokemonList')).toBeTruthy();
  expect(toJSON()).toMatchSnapshot();
});
