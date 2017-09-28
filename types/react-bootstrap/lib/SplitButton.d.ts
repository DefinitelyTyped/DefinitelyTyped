import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace SplitButton {
    export interface SplitButtonProps extends React.HTMLProps<SplitButton> {
        bsStyle?: string;
        bsSize?: Sizes;
        dropdownTitle?: any; // TODO: Add more specific type
        dropup?: boolean;
        pullRight?: boolean;
    }
}
declare class SplitButton extends React.Component<SplitButton.SplitButtonProps> { }
export = SplitButton;
