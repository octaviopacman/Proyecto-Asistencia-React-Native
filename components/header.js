import React from "react";
import { Button, StyleSheet, Platform, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

function Header() {
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#2d63e0',
            ...Platform.select({
                ios: {
                    paddingTop: '17%',
                },
                android: {

                    paddingTop: '0%',
                    height: '5%',
                    color: 'black',
                    alignItems: 'center',

                }
            }),


        },
        title: {
            color: '#fff',
            fontSize: 15,
        },
        button: {
            backgroundColor: '#fff',
            height: '100%'
        },


    })
    const PressEvent = (e) => {
        console.log('Menu Presionado');
    }


    return (
        <View style={styles.container}>
            <Button title="Menu" color="black" onPress={PressEvent} style={styles.button} />
            <Text style={styles.title}>Escuela de Educación Secundaria Técnica Nº4</Text>

        </View>
    )
}
export default Header;