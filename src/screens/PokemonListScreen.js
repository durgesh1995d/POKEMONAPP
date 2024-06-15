import React from 'react';
import { SafeAreaView } from 'react-native';
import PokemonList from '../component/PokemonList';

const PokemonListScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <PokemonList navigation={navigation} />
    </SafeAreaView>
  );
};

export default PokemonListScreen;
