import * as React from 'react';
import { View, Text, Button } from 'react-native';
import changeNavigationBarColor, { HideNavigationBar, ShowNavigationBar } from 'react-native-navigation-bar-color';

export default class Mynewapp extends React.Component {
    setNavigationColor = (color: string) => {
        changeNavigationBarColor(color);
    }

    setNavBar = (color: string) => {
        changeNavigationBarColor(color, true, true);
    }

    hideNavigation() {
        HideNavigationBar();
    }

    showNavigation() {
        ShowNavigationBar();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-around',
                    alignContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                }}
            >
                <Button
                    title="Set color red"
                    onPress={() => {
                        this.setNavigationColor('red');
                    }}
                />
                <Button
                    title="Set color blue"
                    onPress={() => {
                        this.setNavigationColor('blue');
                    }}
                />
                <Button
                    title="Set color ligth"
                    onPress={() => {
                        changeNavigationBarColor('#ffffff', true);
                    }}
                />
                <Button title="Hide bar" onPress={this.hideNavigation} />
                <Button title="Show bar" onPress={this.showNavigation} />
                <Text>Hello Word!</Text>
            </View>
        );
    }
}
