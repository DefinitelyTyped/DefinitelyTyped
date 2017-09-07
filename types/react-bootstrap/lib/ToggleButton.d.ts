import * as React from 'react';

declare class ToggleButton extends React.Component<ToggleButtonProps> { }
declare namespace ToggleButton { }
export = ToggleButton

interface ToggleButtonProps extends React.HTMLProps<ToggleButton> {
    checked?: boolean;
    name?: string;
    value: number|string;
}
