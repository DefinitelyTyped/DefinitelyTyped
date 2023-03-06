import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace Button {
    export interface ButtonProps extends React.HTMLProps<Button> {
        bsClass?: string | undefined;
        active?: boolean | undefined;
        block?: boolean | undefined;
        bsStyle?: string | null | undefined;
        bsSize?: Sizes | undefined;
        componentClass?: React.ElementType | undefined;
        disabled?: boolean | undefined;
    }
}
declare class Button extends React.Component<Button.ButtonProps> { }
export = Button;
