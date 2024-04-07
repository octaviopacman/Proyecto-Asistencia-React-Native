/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }

});

function App(): React.JSX.Element {

  let codigo = 'carlitos';

  return (
    
        <View style={styles.container}>
          <Header />
          <Login />
           <QRCodeComponent data={codigo}/>

        </View>
      
  )
}


export default App;
