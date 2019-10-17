import * as React from 'react';
import { View, StyleSheet } from 'react-native';

export function App() {
    return <View style={styles.container} />;
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'red',
        width: '100%',
        height: '100%',
    },
});
