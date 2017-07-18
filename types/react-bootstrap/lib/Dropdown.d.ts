import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';

export interface DropdownBaseProps {
  bsClass?: string;
  componentClass?: React.ReactType;
  disabled?: boolean;
  dropup?: boolean;
  id: string;
  onClose?: Function;
  onSelect?: SelectCallback;
  onToggle?: (isOpen: boolean) => void;
  open?: boolean;
  pullRight?: boolean;
  role?: string;
}

type DropdownProps = DropdownBaseProps & React.HTMLProps<Dropdown>;

export default class Dropdown extends React.Component<DropdownProps> {
  public static Menu: typeof DropdownMenu;
  public static Toggle: typeof DropdownToggle;
}
