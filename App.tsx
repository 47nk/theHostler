/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet, Text,SafeAreaView,StatusBar
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from './NestGuard/screens/OnBoarding/OnBoarding';
import LoginScreen from './NestGuard/screens/Login/LoginScreen';
import EnterOTPScreen from './NestGuard/screens/EnterOTP/EnterOTPScreen';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  StatusBar.setBarStyle("light-content")
  return (
    <NavigationContainer >
      <Stack.Navigator  initialRouteName="OnBoardingScreen">
        <Stack.Screen options={{headerShown: false}} name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="EnterOTP" component={EnterOTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
