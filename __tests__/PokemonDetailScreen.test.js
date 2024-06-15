import React from 'react';
import { render } from '@testing-library/react-native';
import PokemonDetailScreen from '../src/screens/PokemonDetailScreen';
import PokemonDetail from '../src/component/PokemonDetail';

// Mock the PokemonDetail component
jest.mock('../src/component/PokemonDetail', () => 'PokemonDetail');

describe('PokemonDetailScreen', () => {
  it('renders PokemonDetailScreen correctly', () => {
    const route = { params: { name: 'pikachu' } }; // Mock route prop

    const { getByTestId, toJSON } = render(
      <PokemonDetailScreen route={route} />
    );

    expect(getByTestId('PokemonDetail')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
