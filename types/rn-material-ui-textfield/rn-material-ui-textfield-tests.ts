import { Component, ReactElement, createRef } from 'react';
import { View } from 'react-native';
import { OutlinedTextField } from 'rn-material-ui-textfield';

export class Example extends Component {
    outlinedTextFieldRef = createRef<OutlinedTextField>();

    componentDidMount() {
        if (this.outlinedTextFieldRef.current) {
            this.outlinedTextFieldRef.current.focus();
            this.outlinedTextFieldRef.current.blur();
            this.outlinedTextFieldRef.current.clear();
            this.outlinedTextFieldRef.current.value();
            this.outlinedTextFieldRef.current.isFocused();
            this.outlinedTextFieldRef.current.isRestricted();
            this.outlinedTextFieldRef.current.setValue('Initial value');
        }
    }

    render(): ReactElement {
        return (
            <View>
                <OutlinedTextField
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
