import React from "react";
import { Button, StyleSheet, Platform, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

function Header() {
    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#03045e',
            ...Platform.select({
                ios: {
                    paddingTop: '13%',
                    height: '13%',
                    alignItems: 'center',
                },
                android: {
                    height: '6%',
                    alignItems: 'center',
                },
            }),


        },
        title: {
            color: '#fff',
            fontSize: 15,
            ...Platform.select({
                android: {
                    fontWeight: '600',
                    marginLeft: 12,
                    fontSize: 17,
                },
            }),


        },
        boton: {
            backgroundColor: '#000814',
            alignItems: 'center',
            height: '100%',
            width: '10%',
            justifyContent: 'center',
            ...Platform.select({
                ios: {
                   
                },
            })
        },
        botonText: {
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 15,
            fontWeight: 'bold',
        }


    })
    const PressEvent = (e) => {
        console.log('Menu Presionado');
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={PressEvent} style={styles.boton}>
                <Text style={styles.botonText}>Menu</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Escuela de Educación Secundaria Técnica Nº4</Text>

        </View>
    )
}
export default Header;