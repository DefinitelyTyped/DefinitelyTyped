import * as React from 'react';
import { DropdownBaseProps } from './Dropdown';

interface NavDropdownBaseProps extends DropdownBaseProps {
  active?: boolean;
  noCaret?: boolean;
  eventKey?: any;
}

type NavDropdownProps = NavDropdownBaseProps & React.HTMLProps<NavDropdown>;

export default class NavDropdown extends React.Component<NavDropdownProps> { }
