import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, Dimensions, SafeAreaView, View } from 'react-native';
import PokemonList from '../component/PokemonList';
import * as Notifications from 'expo-notifications';

const { height, width } = Dimensions.get('window');

const PokemonListScreen = ({ navigation }) => {
  const requestPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      await Notifications.requestPermissionsAsync();
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const scheduleNotification = async (minutes) => {
    const trigger = new Date(Date.now() + minutes * 60 * 1000); // Schedule for `minutes` later

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Scheduled Notification',
        body: `This is a notification scheduled for ${minutes} minutes.`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.MAX, // Android: Ensure high priority
      },
      trigger,
    });
    Alert.alert(`Notification scheduled for ${minutes} minutes from now.`);
    console.log(`Notification scheduled for ${minutes} minutes from now.`);
  };
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  return (
    <SafeAreaView>
      <PokemonList navigation={navigation} />
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          // alignItems: 'center',
          alignSelf: 'center',
          // justifyContent: 'center',
        }}
      >
        <View style={{ paddingBottom: 10 }}>
          <Button
            title='Schedule 2 Min Notification'
            onPress={() => scheduleNotification(2)}
          />
        </View>
        <Button
          title='Schedule 5 Min Notification'
          onPress={() => scheduleNotification(5)}
        />
      </View>
    </SafeAreaView>
  );
};

export default PokemonListScreen;
