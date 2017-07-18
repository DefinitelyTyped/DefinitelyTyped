import * as React from 'react';
import { Sizes } from 'react-bootstrap';
import { DropdownBaseProps } from './Dropdown';

interface DropdownButtonBaseProps extends DropdownBaseProps {
  block?: boolean;
  bsSize?: Sizes;
  bsStyle?: string;
  navItem?: boolean;
  noCaret?: boolean;
  pullRight?: boolean;
}

type DropdownButtonProps = DropdownButtonBaseProps & React.HTMLProps<DropdownButton>;

export default class DropdownButton extends React.Component<DropdownButtonProps> { }
