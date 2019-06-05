// Type definitions for rmc-drawer 0.4
// Project: https://github.com/react-component/m-drawer
// Definitions by: Frithjof Winkelmann <https://github.com/Hoff97>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as moment from "moment";
import * as React from 'react';

interface DrawerProps {
    className?: string;
    prefixCls?: string;
    children?: React.ReactNode | React.ReactNode[];
    style?: React.CSSProperties;
    sidebarStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    overlayStyle?: React.CSSProperties;
    dragHandleStyle?: React.CSSProperties;
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
