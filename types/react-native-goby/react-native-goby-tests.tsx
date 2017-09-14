import * as React from 'react';

import {
    View,
    AppRegistry
} from 'react-native';

import Goby from "react-native-goby";

class Home extends React.Component {
    render() {
        return (
            <View></View>
        );
    }
}


AppRegistry.registerComponent('home', () => Goby({
    updateDialog: false,
    checkFrequency: Goby.CheckFrequency.ON_APP_RESUME,
    installMode: Goby.InstallMode.IMMEDIATE
})(Home));
