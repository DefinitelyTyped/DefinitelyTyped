import * as React from 'react';
import { Sizes } from 'react-bootstrap';
import { DropdownBaseProps } from './Dropdown';

declare class DropdownButton extends React.Component<DropdownButtonProps> { }
declare namespace DropdownButton { }
export = DropdownButton

interface DropdownButtonBaseProps extends DropdownBaseProps {
  block?: boolean;
  bsSize?: Sizes;
  bsStyle?: string;
  navItem?: boolean;
  noCaret?: boolean;
  pullRight?: boolean;
}

type DropdownButtonProps = DropdownButtonBaseProps & React.HTMLProps<DropdownButton>;
