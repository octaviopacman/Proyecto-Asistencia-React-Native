import React, { useState } from 'react';
import QRCodeComponent from './codigo';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
} from 'react-native';

function Login(props) {
  const [formData, setFormData] = useState({
    correo: '',
    password: ''
  });
  const [isLogged, setIsLogged] = useState(false);
  const [loginData, setLoginData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    console.log("Inicio de sesión");
    console.log(formData);

    setLoading(true);
    setError(null);

    // Configuración de la solicitud POST
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correo: formData.correo, password: formData.password })
    };

    fetch('http://192.168.1.49:8000/login', requestOptions) //// REEMPLAZAR POR IP POR IP DE LA COMPUTADORA, NO LOCALHOST
      .then(response => response.json())
      .then(data => {
        // Asumiendo que el hashqr está en el objeto data
        setLoginData(data.hashqr);
        setIsLogged(true);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error de inicio de sesión:", error);
        setError(error.toString());
        setLoading(false);
      });
  };

  const styles = StyleSheet.create({
    textinput: {
      backgroundColor: '#8c8c8c',
      height: 40,  // Ajustado para un valor más estándar en React Native
      marginBottom: 15,
      borderRadius: 15,
      textAlign: 'center',
      fontSize: 20,
    },
    container: {
      width: '78%',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 20,  // Ajustado para un valor más estándar en React Native
      borderRadius: 1
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      paddingBottom: 5,  // Ajustado para un valor más estándar en React Native
      paddingTop: 5,
      color: 'black',
      fontWeight: '500',


    },

    boton: {
      borderRadius: 10,
      backgroundColor: '#000814',
      height: '18%',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',

    },
    botonText: {

      fontSize: 18,
      color: 'white',
      fontWeight: '500',
    },
    correo: {
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    codigo: {
      marginTop: 0,
      marginLeft:  'auto',
      marginRight: 'auto',
      backgroundColor: '#03045e',
      padding: 20,
      borderRadius: 25,
    }

  });

  let content;
  if (loading) {
    content = <ActivityIndicator size="large" color="gray" />;
  } else if (isLogged) {
    content = <QRCodeComponent data={String(loginData)} />;
  } else if (error) {
    content = <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Correo:</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => handleChange('correo', text)}
          value={formData.correo}
        />
        <Text style={styles.text}>Contraseña:</Text>
        <TextInput
          style={styles.textinput}
          secureTextEntry={true}
          onChangeText={(text) => handleChange('password', text)}
          value={formData.password}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.boton}>
          <Text style={styles.botonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>

      {isLogged && loginData && (
      <View style={styles.codigo}>
        {content}
      </View>
    )}

    </View>
  );
}

export default Login;
