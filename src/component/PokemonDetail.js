import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useGetPokemonByNameQuery } from '../api/pokemonApi';

const PokemonDetail = ({ route }) => {
  const { name } = route.params;
  const {
    data = null,
    error = null,
    isLoading = false,
  } = useGetPokemonByNameQuery(name);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading data</Text>;

  return (
    <View style={styles.container} testID={route.params?.testID}>
      <Image
        source={{ uri: data?.sprites?.back_default }}
        style={{ resizeMode: 'contain', height: 250 }}
      />
      <View style={styles.rowView}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.detailText}>{data?.name}</Text>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.headerText}>Height</Text>
        <Text style={styles.detailText}>{data?.height}</Text>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.headerText}>Weight</Text>
        <Text style={styles.detailText}>{data?.weight}</Text>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.headerText}>Base Experience</Text>
        <Text style={styles.detailText}>{data?.base_experience}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  rowView: {
    borderTopWidth: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#666',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  detailText: {
    fontSize: 22,
    color: '#000',
  },
});
export default PokemonDetail;
