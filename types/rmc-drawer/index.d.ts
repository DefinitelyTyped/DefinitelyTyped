// Type definitions for rmc-drawer 0.4
// Project: https://github.com/react-component/m-drawer
// Definitions by: Frithjof Winkelmann <https://github.com/Hoff97>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as moment from "moment";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface DrawerProps {
    className?: string;
    prefixCls?: string;
    children?: React.ReactNode | React.ReactNode[];
    style?: ReactDOM.CSSProperties;
    sidebarStyle?: ReactDOM.CSSProperties;
    contentStyle?: ReactDOM.CSSProperties;
    overlayStyle?: ReactDOM.CSSProperties;
    dragHandleStyle?: ReactDOM.CSSProperties;
    sidebar?: React.ReactNode;
    onOpenChange?: (open: boolean, overlay?: { overlayClicked: boolean }) => void;
    open?: boolean;
    position?: 'left' | 'right' | 'top' | 'bottom';
    docked?: boolean;
    transitions?: boolean;
    touch?: boolean;
    enableDragHandle?: boolean;
    dragToggleDistance?: number;
}

declare class Drawer extends React.Component<Partial<DrawerProps>> {
}

export = Drawer;
