import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace Button {
    export interface ButtonProps extends React.HTMLProps<Button> {
        bsClass?: string;
        active?: boolean;
        block?: boolean;
        bsStyle?: string | null;
        bsSize?: Sizes;
        componentClass?: React.ElementType;
        disabled?: boolean;
    }
}
declare class Button extends React.Component<Button.ButtonProps> { }
export = Button;
