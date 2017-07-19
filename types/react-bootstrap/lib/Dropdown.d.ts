import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';
import * as DropdownToggle from './DropdownToggle';
import * as DropdownMenu from './DropdownMenu';

declare class Dropdown extends React.Component<DropdownProps> {
  public static Menu: typeof DropdownMenu;
  public static Toggle: typeof DropdownToggle;
}
export = Dropdown

type DropdownProps = Dropdown.DropdownBaseProps & React.HTMLProps<Dropdown>;

declare namespace Dropdown {
  interface DropdownBaseProps {
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
}
