import React from 'react';
import { QRCode } from 'react-native-custom-qr-codes';
import { StyleSheet, Text, View } from 'react-native';


function QRCodeComponent(data) {

    const styles = StyleSheet.create({
        codigo: {
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center'
        }
    })

    console.log(data.data);

    let textocodigo = data.data; /// por x motivo esto hace q ande


    return (
        <View style={styles.codigo}>
            <QRCode content={textocodigo}/>            
        </View>
    );
}

export default QRCodeComponent;
