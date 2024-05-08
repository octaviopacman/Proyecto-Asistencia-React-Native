/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './components/header.js';
import QRCodeComponent from './components/codigo.js';
import Login from './components/login.js';
import RegistroNuevo from './components/registro.js';
import SplashScreen from 'react-native-splash-screen';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }


});

function App(): React.JSX.Element {

  let codigo = 'carlitos';

  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, [])

  return (
    
        <View style={styles.container}>
          <Header />
          <Login />
          <RegistroNuevo />
        </View>
      
  )
}


export default App;
