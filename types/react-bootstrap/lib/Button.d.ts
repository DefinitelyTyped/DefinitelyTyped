import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sizes } from 'react-bootstrap';

declare namespace Button {
    export interface ButtonProps extends ReactDOM.HTMLProps<Button> {
        bsClass?: string;
        active?: boolean;
        block?: boolean;
        bsStyle?: string | null;
        bsSize?: Sizes;
        componentClass?: React.ReactType;
        disabled?: boolean;
    }
}
declare class Button extends React.Component<Button.ButtonProps> { }
export = Button;
