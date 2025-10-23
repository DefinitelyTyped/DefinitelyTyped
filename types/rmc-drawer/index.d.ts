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
