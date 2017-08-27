import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

declare class DropdownMenu extends React.Component<DropdownMenuProps> { }
declare namespace DropdownMenu { }
export = DropdownMenu

interface DropdownMenuProps extends React.HTMLProps<DropdownMenu> {
  labelledBy?: string | number;
  onClose?: Function;
  onSelect?: SelectCallback;
  open?: boolean;
  pullRight?: boolean;
}
