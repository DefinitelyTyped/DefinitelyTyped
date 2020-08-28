import * as React from 'react';
import { Text } from 'react-native';
import ActionSheet, { ActionSheetCustom } from 'react-native-actionsheet';

class Example extends React.Component {
    render() {
        return (
            <ActionSheet
                options={['1', '2', '3']}
                onPress={index => {}}
                title="Test"
                message="Test"
                tintColor="white"
                cancelButtonIndex={0}
                destructiveButtonIndex={1}
            />
        );
    }
}

class CustomSheetExample extends React.Component {
    render() {
        return (
            <ActionSheetCustom
                options={[
                    'Cancel',
                    'Apple',
                    <Text style={{ color: 'yellow' }}>Banana</Text>,
                    'Watermelon',
                    <Text style={{ color: 'red' }}>Durian</Text>,
                ]}
                onPress={index => {}}
                title={<Text style={{ color: '#000', fontSize: 18 }}>Which one do you like?</Text>}
                message="Test"
                tintColor="white"
                buttonUnderlayColor="rebeccapurple"
                cancelButtonIndex={0}
                destructiveButtonIndex={1}
                styles={{}}
            />
        );
    }
}
