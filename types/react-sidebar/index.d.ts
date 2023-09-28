// Type definitions for react-sidebar 3.0
// Project: https://github.com/balloob/react-sidebar#readme
// Definitions by: Jeroen Vervaeke <https://github.com/jeroenvervaeke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactNode } from "react";

export interface SidebarProps {
    children?: ReactNode;
    contentClassName?: string | undefined;
    defaultSidebarWidth?: number | undefined;
    docked?: boolean | undefined;
    dragToggleDistance?: number | undefined;
    onSetOpen?(open: boolean): void;
    open?: boolean | undefined;
    overlayClassName?: string | undefined;
    pullRight?: boolean | undefined;
    rootClassName?: string | undefined;
    shadow?: boolean | undefined;
    sidebar?: React.ReactNode | undefined;
    sidebarClassName?: string | undefined;
    styles?: SidebarStyles | undefined;
    transitions?: boolean | undefined;
    touch?: boolean | undefined;
    touchHandleWidth?: number | undefined;
    rootId?: string | undefined;
    sidebarId?: string | undefined;
    contentId?: string | undefined;
    overlayId?: string | undefined;
}

export interface SidebarStyles {
    content?: Partial<CSSStyleDeclaration> | undefined;
    dragHandle?: Partial<CSSStyleDeclaration> | undefined;
    overlay?: Partial<CSSStyleDeclaration> | undefined;
    root?: Partial<CSSStyleDeclaration> | undefined;
    sidebar?: Partial<CSSStyleDeclaration> | undefined;
}

export default class Sidebar extends Component<SidebarProps> {}
