import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sizes } from 'react-bootstrap';

declare namespace ButtonToolbar {
    export interface ButtonToolbarProps extends ReactDOM.HTMLProps<ButtonToolbar> {
        block?: boolean;
        bsSize?: Sizes;
        bsStyle?: string;
        bsClass?: string;
        justified?: boolean;
        vertical?: boolean;
    }
}
declare class ButtonToolbar extends React.Component<ButtonToolbar.ButtonToolbarProps> { }
export = ButtonToolbar;
