import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/WeatherNavigator';
import EnterScreen from './screens/EnterScreen';
import WeatherScreen from './screens/WeatherScreen';

//fetching fonts
const fetchFonts = () => {

  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {
  const [FontLoaded, setFontLoaded] = useState(false);
  //loading fonts
  if (!FontLoaded) {
    return (<AppLoading startAsync={fetchFonts} onFinish={() => { setFontLoaded(true) }} />)
  }
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Enter" component={EnterScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Weather" component={WeatherScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Help" component={HelpScreen} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>

  );
}
