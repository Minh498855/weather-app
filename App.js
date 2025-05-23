import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import CityWeatherScreen from './screens/CityWeather';
import Login from './screens/Login';
import { CityProvider } from './contexts/CityContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CityProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="CityWeather" component={CityWeatherScreen} options={{ headerShown: false  }} />
      </Stack.Navigator>
    </NavigationContainer>
    </CityProvider>
  );
}