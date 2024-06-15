import React from 'react';
import { SafeAreaView } from 'react-native';
import PokemonDetail from '../component/PokemonDetail';

const PokemonDetailScreen = ({ route }) => {
  return (
    <SafeAreaView>
      <PokemonDetail route={route} testID="PokemonDetail" />
    </SafeAreaView>
  );
};

export default PokemonDetailScreen;
