import * as React from 'react';
import TextInputMask from 'react-native-text-input-mask';

class Example extends React.Component {
    render() {
        return (
            <TextInputMask
                onChangeText={(formatted, extracted) => {
                    console.log(formatted); // +1 (123) 456-78-90
                    console.log(extracted); // 1234567890
                }}
                mask={"+1 ([000]) [000] [00] [00]"}
            />
        );
    }
}
