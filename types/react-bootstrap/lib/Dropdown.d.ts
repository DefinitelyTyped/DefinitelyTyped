import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';
import DropdownToggle = require('./DropdownToggle');
import DropdownMenu = require('./DropdownMenu');

declare namespace Dropdown {
    export interface DropdownBaseProps {
        bsClass?: string | undefined;
        componentClass?: React.ElementType | undefined;
        disabled?: boolean | undefined;
        dropup?: boolean | undefined;
        id: string;
        onClose?: Function | undefined;
        onSelect?: SelectCallback | undefined;
        onToggle?: ((isOpen: boolean, event: React.SyntheticEvent, metadata: {
          source: 'select' | 'click' | 'rootClose' | 'keydown'
        }) => void) | undefined;
        open?: boolean | undefined;
        pullRight?: boolean | undefined;
        role?: string | undefined;
    }

    export type DropdownProps = Dropdown.DropdownBaseProps & React.HTMLProps<Dropdown>;
}

declare class Dropdown extends React.Component<Dropdown.DropdownProps> {
  public static Menu: typeof DropdownMenu;
  public static Toggle: typeof DropdownToggle;
}
export = Dropdown;
