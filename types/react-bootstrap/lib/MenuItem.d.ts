import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

declare namespace MenuItem {
    export interface MenuItemProps extends React.HTMLProps<MenuItem> {
        active?: boolean | undefined;
        bsClass?: string | undefined;
        disabled?: boolean | undefined;
        divider?: boolean | undefined;
        eventKey?: any;
        header?: boolean | undefined;
        onClick?: React.MouseEventHandler<{}> | undefined;
        onSelect?: SelectCallback | undefined;
        target?: string | undefined;
        title?: string | undefined;
    }
}
declare class MenuItem extends React.Component<MenuItem.MenuItemProps> { }
export = MenuItem;
