
/*

Note: This must be compiled with the target set to ES6

The content of index.io.js could be something like

    'use strict';

     import { AppRegistry } from 'react-native'
     import Welcome from './gen/Welcome'

     AppRegistry.registerComponent('MopNative', () => Welcome);


For a list of complete Typescript examples: check https://github.com/bgrieder/RNTSExplorer

 */

///<reference path="../react-native/react-native.d.ts" />


import React from 'react-native'
const  { StyleSheet, Text, View } = React

var styles = StyleSheet.create(
    {
        container:    {
            flex:            1,
            justifyContent:  'center',
            alignItems:      'center',
            backgroundColor: '#F5FCFF',
        },
        welcome:   {
            fontSize:  20,
            textAlign: 'center',
            margin:    10,
        },
        instructions: {
            textAlign:    'center',
            color:        '#333333',
            marginBottom: 5,
        },
    }
)


class Welcome extends React.Component<any,any> {


    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        )
    }
}

export default Welcome

