import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

declare namespace ToggleButton {
    export interface ToggleButtonProps extends ReactDOM.HTMLProps<ToggleButton> {
        checked?: boolean;
        name?: string;
        value: number | string;
    }
}
declare class ToggleButton extends React.Component<ToggleButton.ToggleButtonProps & Button.ButtonProps> { }
export = ToggleButton;
