import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SelectCallback } from 'react-bootstrap';

declare namespace MenuItem {
    export interface MenuItemProps extends ReactDOM.HTMLProps<MenuItem> {
        active?: boolean;
        bsClass?: string;
        disabled?: boolean;
        divider?: boolean;
        eventKey?: any;
        header?: boolean;
        onClick?: ReactDOM.MouseEventHandler<{}>;
        onSelect?: SelectCallback;
        target?: string;
        title?: string;
    }
}
declare class MenuItem extends React.Component<MenuItem.MenuItemProps> { }
export = MenuItem;
