import * as React from 'react';
import { View, Text } from 'react-native';
import { BluetoothSerial } from 'react-native-bluetooth-serial';

class Example extends React.Component {
    async componentDidMount() {
        const devices = await BluetoothSerial.list();

        await BluetoothSerial.connect(devices[0].id);

        BluetoothSerial.write("Hello");

        await BluetoothSerial.disconnect();
    }
    render() {
        return (
            <View>
                <Text>Printer</Text>
            </View>
        );
    }
}
