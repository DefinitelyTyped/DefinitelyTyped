import * as React from 'react';

declare namespace ToggleButton {
    export interface ToggleButtonProps extends React.HTMLProps<ToggleButton> {
        checked?: boolean;
        name?: string;
        value: number|string;
    }
}
declare class ToggleButton extends React.Component<ToggleButton.ToggleButtonProps> { }
export = ToggleButton;
