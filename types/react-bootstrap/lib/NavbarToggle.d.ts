import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace NavbarToggle {
    export interface NavbarToggleProps extends ReactDOM.HTMLProps<NavbarToggle> {
        onClick?: ReactDOM.MouseEventHandler<any>;
    }
}
declare class NavbarToggle extends React.Component<NavbarToggle.NavbarToggleProps> { }
export = NavbarToggle;
