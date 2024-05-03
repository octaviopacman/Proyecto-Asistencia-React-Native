import React, { useState } from 'react';
import QRCodeComponent from './codigo';
import {
   View,
   TextInput,
   Text,
   StyleSheet,
   Button
   } from 'react-native';



function Login(props){
    const [mostrarCodigo, setMostrarCodigo] = useState(false);
    const [formData, setFormData] = useState({
      nombre: '',
      contrasena: '',

    });
    const[isLogged, setisLogged] = useState(false);
    console.log(mostrarCodigo);

        const handleChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
    };
    

    const handleForm = (e) => {
      e.preventDefault();
      console.log("Inicio de Sesion");
      console.log(formData);

      setisLogged(true);
      };

    const styles = StyleSheet.create({
      textinput: {
        backgroundColor: '#8c8c8c',
        height: '15%'
      },
      container: {
        
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '2%',
        borderRadius: '1px',
      },
      text: {
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: '2%',
        paddingTop: '2%',
        ...Platform.select({
          android: {
            color: 'black',
          }
        }),

      },
      nombre: {
        textAlign: 'center',
        textTransform: 'capitalize',
      }
    });
    let qrvar = formData.nombre;
    let content;
    if (isLogged){
      content = <QRCodeComponent data={String(qrvar)} />; /////// ARREGLAR
    }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Correo:</Text>
        <TextInput
          style={styles.textinput}
          ty
          onChangeText={(text) => handleChange('nombre', text)}
          value={formData.nombre}
        />
        <Text style={styles.text}>Contraseña:</Text>
        <TextInput
          style={styles.textinput}
          secureTextEntry={true}
          onChangeText={(text) => handleChange('contrasena', text)}
          value={formData.contrasena}
        />
        <Button title="Iniciar Sesión" onPress={handleForm} />
      </View>

      <View style={{ marginTop: 20, marginLeft: 'auto', marginRight: 'auto' }}>
        <Text>{content}</Text>
        <Text style={styles.nombre}>{formData.nombre}</Text> 
      </View>
    </View>
  );
}

export default Login;
