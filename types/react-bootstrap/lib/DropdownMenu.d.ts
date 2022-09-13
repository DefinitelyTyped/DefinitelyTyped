import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

declare namespace DropdownMenu {
    export interface DropdownMenuProps extends React.HTMLProps<DropdownMenu> {
        labelledBy?: string | number | undefined;
        onClose?: Function | undefined;
        onSelect?: SelectCallback | undefined;
        open?: boolean | undefined;
        pullRight?: boolean | undefined;
    }
}
declare class DropdownMenu extends React.Component<DropdownMenu.DropdownMenuProps> { }
export = DropdownMenu;
