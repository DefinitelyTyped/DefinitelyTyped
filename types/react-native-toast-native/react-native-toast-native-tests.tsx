import * as React from 'react';
import { View, Button } from 'react-native';
import Toast, { Style } from 'react-native-toast-native';

class Test extends React.Component<any> {
    showToast() {
        const style: Style = {
            color: 'white',
            backgroundColor: '#5CB85C',
            fontSize: 16,
            height: 140,
            borderRadius: 15,
            fontWeight: 'bold',
            yOffset: 40
        };

        Toast.show("I'm a toast!", Toast.SHORT, Toast.BOTTOM, style);
    }

    render() {
        return (
            <View>
                <Button
                    onPress={() => this.showToast()}
                    title="Show Toast" />
            </View>);
    }
}
