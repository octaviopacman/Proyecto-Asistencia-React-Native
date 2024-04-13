import React from "react";
import { TextInput } from "react-native";

export default function RegistroNuevo() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm();

    const style = {
    error: {
      color: "red",
      fontSize:'11px'
    }
  };

  const onSubmit = (data) => {
    
    console.log("Inicio de Sesion");
    
    
    console.log(JSON.stringify(data));


    axios.post('http://localhost:8000/profesores', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log('Success:', response.data);
        // Aquí podrías redirigir al usuario o limpiar el formulario
    })
    .catch(error => {
        console.error('Error:', error);
        // Aquí podrías informar al usuario del error
    });
    }

  return (
    <View>
        <TextInput></TextInput>
    </View>
  );
}
