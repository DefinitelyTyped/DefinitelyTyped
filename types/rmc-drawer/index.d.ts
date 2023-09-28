// Type definitions for rmc-drawer 0.4
// Project: https://github.com/react-component/m-drawer
// Definitions by: Frithjof Winkelmann <https://github.com/Hoff97>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as moment from "moment";
import * as React from "react";

interface DrawerProps {
    className?: string | undefined;
    prefixCls?: string | undefined;
    children?: React.ReactNode | React.ReactNode[] | undefined;
    style?: React.CSSProperties | undefined;
    sidebarStyle?: React.CSSProperties | undefined;
    contentStyle?: React.CSSProperties | undefined;
    overlayStyle?: React.CSSProperties | undefined;
    dragHandleStyle?: React.CSSProperties | undefined;
    sidebar?: React.ReactNode | undefined;
    onOpenChange?: ((open: boolean, overlay?: { overlayClicked: boolean }) => void) | undefined;
    open?: boolean | undefined;
    position?: "left" | "right" | "top" | "bottom" | undefined;
    docked?: boolean | undefined;
    transitions?: boolean | undefined;
    touch?: boolean | undefined;
    enableDragHandle?: boolean | undefined;
    dragToggleDistance?: number | undefined;
}

declare class Drawer extends React.Component<Partial<DrawerProps>> {
}

export = Drawer;
