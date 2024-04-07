import React, { useState } from 'react';
import QRCodeComponent from './codigo';
import {
   View,
   TextInput,
   Text,
   StyleSheet,
   Button
   } from 'react-native';


// Definición de un componente de función
function Login(props){
    const [mostrarCodigo, setMostrarCodigo] = useState(false);
    const [formData, setFormData] = useState({
      nombre: '',
      contrasena: '',

    });
    console.log(mostrarCodigo);

    let codigo;

    if (mostrarCodigo === true){
      codigo = <QRCodeComponent data={formData.nombre}/>
    };

    const handleChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
    };
    

    const handleForm = (e) => {
      e.preventDefault();
      console.log("Inicio de Sesion");
      setMostrarCodigo(true);
      console.log(formData);
    };

    const styles = StyleSheet.create({
      textinput: {
        backgroundColor: '#8c8c8c',
      },
      container: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    });
    
  return (
    <View>
      <View style={styles.container}>
        <Text>Nombre de Usuario:</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => handleChange('nombre', text)}
          value={formData.nombre}
        />
        <Text>Contraseña:</Text>
        <TextInput
          style={styles.textinput}
          secureTextEntry={true}
          onChangeText={(text) => handleChange('contrasena', text)}
          value={formData.contrasena}
        />
        <Button title="Iniciar Sesión" onPress={handleForm} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>{codigo}</Text>
      </View>
    </View>
  );
}

export default Login;
