import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

interface DropdownMenuProps extends React.HTMLProps<DropdownMenu> {
  labelledBy?: string | number;
  onClose?: Function;
  onSelect?: SelectCallback;
  open?: boolean;
  pullRight?: boolean;
}

export default class DropdownMenu extends React.Component<DropdownMenuProps> { }
