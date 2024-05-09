/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
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
import Login from './screens/login.js';
import RegistroNuevo from './components/registro.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Admin from './screens/admin.js';

const Stack = createNativeStackNavigator();



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
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Login} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Profile" component={Admin} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>


  )
}


export default App;
