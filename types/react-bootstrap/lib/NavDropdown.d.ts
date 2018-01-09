import * as React from 'react';
import { DropdownBaseProps } from './Dropdown';

declare namespace NavDropdown {
    export interface NavDropdownBaseProps extends DropdownBaseProps {
        active?: boolean;
        noCaret?: boolean;
        eventKey?: any;
    }

    export type NavDropdownProps = NavDropdownBaseProps & React.HTMLProps<NavDropdown>;
}
declare class NavDropdown extends React.Component<NavDropdown.NavDropdownProps> { }
export = NavDropdown;
