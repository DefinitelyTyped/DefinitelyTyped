import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Omit } from 'react-bootstrap';
import { DropdownBaseProps } from './Dropdown';

declare namespace NavDropdown {
    export interface NavDropdownBaseProps extends DropdownBaseProps {
        active?: boolean;
        noCaret?: boolean;
        eventKey?: any;
        title: React.ReactNode;
    }

    export type NavDropdownProps = NavDropdownBaseProps & Omit<ReactDOM.HTMLProps<NavDropdown>, 'title'>;
}
declare class NavDropdown extends React.Component<NavDropdown.NavDropdownProps> { }
export = NavDropdown;
