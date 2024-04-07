import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function Header()
{
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#2d63e0',
            paddingTop: '17%',
            display: 'flex',
            flexDirection: 'row',
            
        },
        title: {
            color: '#fff',
            fontSize: 15,
        },
        button: {
            backgroundColor: '#fff',
            
        }
    })
    const PressEvent = (e) => {
        console.log('Menu Presionado');
    }

    return(
        <View style={styles.container}>
            <Button title="Menu" color="#fff" onPress={PressEvent} style={styles.button} />
            <Text style={styles.title}>Escuela de Educación Secundaria Técnica Nº4</Text>
        </View>
    )
}
export default Header;