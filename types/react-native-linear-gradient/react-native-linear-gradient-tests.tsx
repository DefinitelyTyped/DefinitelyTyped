import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, StyleSheet } from 'react-native';

export default class MyLinearGradient extends React.Component {
    render() {
        return (
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 0.5, y: 1.0 }}
                locations={[0, 0.5, 0.6]}
                style={styles.linearGradient}
            >
                <Text style={styles.buttonText}>Sign in with Facebook</Text>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent'
    }
});
