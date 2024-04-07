import React from 'react';
import { QRCode } from 'react-native-custom-qr-codes';
import { View } from 'react-native';


function QRCodeComponent({ data }) {
    return (
        <View>
            <QRCode
                content={data}
                size={200}
            />
        </View>
    );
}

export default QRCodeComponent;
