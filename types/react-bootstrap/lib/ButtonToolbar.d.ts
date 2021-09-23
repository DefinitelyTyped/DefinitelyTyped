import * as React from 'react';
import { Sizes } from 'react-bootstrap';

declare namespace ButtonToolbar {
    export interface ButtonToolbarProps extends React.HTMLProps<ButtonToolbar> {
        block?: boolean | undefined;
        bsSize?: Sizes | undefined;
        bsStyle?: string | undefined;
        bsClass?: string | undefined;
        justified?: boolean | undefined;
        vertical?: boolean | undefined;
    }
}
declare class ButtonToolbar extends React.Component<ButtonToolbar.ButtonToolbarProps> { }
export = ButtonToolbar;
