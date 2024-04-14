import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Modal, Button, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import MainStack from './Navigate';
import { gStyle } from './styles/style';

const fonts = () => Font.loadAsync({
  'extra-bold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
  'italic': require('./assets/fonts/Montserrat-Italic.ttf'),
  'semi-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
});

export default function App() {

  

  return (
    <MainStack />
  );
}
