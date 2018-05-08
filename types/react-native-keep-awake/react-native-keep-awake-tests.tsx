import * as React from 'react';
import { View } from 'react-native';
import KeepAwake from 'react-native-keep-awake';

KeepAwake.activate();
KeepAwake.deactivate();

class TestComponent extends React.Component {
    render() {
       return (
            <KeepAwake />
       );
    }
}

class TestChildernComponent extends React.Component {
    render() {
        return (
            <KeepAwake>
                <View />
            </KeepAwake>
        );
    }
}
