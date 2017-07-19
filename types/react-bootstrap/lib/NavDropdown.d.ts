import * as React from 'react';
import { DropdownBaseProps } from './Dropdown';

declare class NavDropdown extends React.Component<NavDropdownProps> { }
declare namespace NavDropdown { }
export = NavDropdown

interface NavDropdownBaseProps extends DropdownBaseProps {
  active?: boolean;
  noCaret?: boolean;
  eventKey?: any;
}

type NavDropdownProps = NavDropdownBaseProps & React.HTMLProps<NavDropdown>;
