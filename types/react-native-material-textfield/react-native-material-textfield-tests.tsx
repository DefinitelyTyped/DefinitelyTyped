import * as React from 'react';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';

export class Example extends React.Component {
    textFieldRef = React.createRef<TextField>();

    componentDidMount() {
        if (this.textFieldRef.current) {
            this.textFieldRef.current.focus();
            this.textFieldRef.current.blur();
            this.textFieldRef.current.clear();
            this.textFieldRef.current.value();
            this.textFieldRef.current.isFocused();
            this.textFieldRef.current.isRestricted();
            this.textFieldRef.current.setValue("Initial value");
        }
    }

    render() {
        return (
            <View>
                <TextField
                    label="Example"
                    multiline
                    placeholder="Text when field is empty"
                    value="Initial value"
                    style={{ fontSize: 10 }}
                />
            </View>
        );
    }
}
