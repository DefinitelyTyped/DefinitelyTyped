import * as React from 'react';
import ActionSheet from 'react-native-actionsheet';

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
                styles={{}}
            />
        );
    }
}
