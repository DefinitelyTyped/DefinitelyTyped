import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace InputGroupButton {
    export interface InputGroupButtonProps extends ReactDOM.HTMLProps<InputGroupButton> {
        bsClass?: string;
    }
}
declare class InputGroupButton extends React.Component<InputGroupButton.InputGroupButtonProps> { }
export = InputGroupButton;
