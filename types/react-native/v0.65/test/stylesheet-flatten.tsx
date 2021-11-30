import * as React from 'react';
import { View, Text, ViewStyle, StyleSheet } from 'react-native';

interface Props {
    style: ViewStyle;
}

export function App(props: Props) {
    const backgroundColor = (StyleSheet.flatten([styles.container, props.style]) as ViewStyle).backgroundColor;

    return (
        <View style={[styles.container, props.style]}>
            <Text>{String(backgroundColor)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
});
