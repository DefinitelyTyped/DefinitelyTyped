import * as React from "react";
import Keyboard, { ReactKeyboardOptions } from "react-virtual-keyboard";

export interface KbState {
    textarea: string;
}

export default class MyKeyboard extends React.Component<{}, KbState> {
    onTextareaChanged = (newState: string) => {
        this.setState({ textarea: newState });
    }

    render() {
        return (<Keyboard
            value={ this.state.textarea }
            name='thetextareaname'
            options={{type: 'textarea', layout: 'qwerty', autoAccept: true, alwaysOpen: false, appendLocally: true, color: 'light', class: 'sxcycx', updateOnChange: true }}
            callbackParent={this.onTextareaChanged} />);
    }
}
