import React from 'react';
import { QRCode } from 'react-native-custom-qr-codes';
import { StyleSheet, Text, View } from 'react-native';


function QRCodeComponent(data) {

    const styles = StyleSheet.create({
        codigo: {
            marginLeft: 'auto',
            marginRight: 'auto',
            
        }
    })


    return (
        <View style={styles.codigo}>
            <QRCode content={data}/>                
        </View>
    );
}

export default QRCodeComponent;
