import { Component, ReactElement, createRef } from 'react';
import { View } from 'react-native';
import { TextField } from 'rn-material-ui-textfield';

export class Example extends Component {
    textFieldRef = createRef<TextField>();

    componentDidMount() {
        if (this.textFieldRef.current) {
            this.textFieldRef.current.focus();
            this.textFieldRef.current.blur();
            this.textFieldRef.current.clear();
            this.textFieldRef.current.value();
            this.textFieldRef.current.isFocused();
            this.textFieldRef.current.isRestricted();
            this.textFieldRef.current.setValue('Initial value');
        }
    }

    render(): ReactElement {
        return (
            <View>
                <TextField
                    inputRef= {this.outlinedInputRef}
                    label="Example"
                    multiline
                    placeholder="Text when field is empty"
                    value="Initial value"
                    style={{ fontSize: 10 }}
                    labelOffset={{ x0: 1, y0: 1, x1: 1, y1: 1 }}
                />
            </View>
        );
    }
}
