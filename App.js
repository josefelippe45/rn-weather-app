import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/WeatherNavigator';
import EnterScreen from './screens/EnterScreen';
import WeatherScreen from './screens/WeatherScreen';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Enter" component={EnterScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="Weather" component={WeatherScreen} options={{ headerShown: false }}/>
      </RootStack.Navigator>
    </NavigationContainer>

  );
}
