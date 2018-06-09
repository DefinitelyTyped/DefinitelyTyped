import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace ToggleButton {
    export interface ToggleButtonProps extends React.HTMLProps<ToggleButton> {
        checked?: boolean;
        name?: string;
        value: number | string;
        bsSize?: Sizes;
    }
}
declare class ToggleButton extends React.Component<ToggleButton.ToggleButtonProps> { }
export = ToggleButton;
