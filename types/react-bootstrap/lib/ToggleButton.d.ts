import * as React from 'react';
import { Button } from 'react-bootstrap';

declare namespace ToggleButton {
    export interface ToggleButtonProps extends React.HTMLProps<ToggleButton> {
        checked?: boolean | undefined;
        name?: string | undefined;
        value: number | string;
    }
}
declare class ToggleButton extends React.Component<ToggleButton.ToggleButtonProps & Button.ButtonProps> { }
export = ToggleButton;
