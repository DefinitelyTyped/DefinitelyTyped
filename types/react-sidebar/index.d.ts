// Type definitions for react-sidebar 2.2
// Project: https://github.com/balloob/react-sidebar#readme
// Definitions by: Jeroen Vervaeke <https://github.com/jeroenvervaeke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component } from "react";

export interface SidebarProps {
    contentClassName?: string;
    docked?: boolean;
    dragToggleDistance?: number;
    onSetOpen?(): void;
    open?: boolean;
    overlayClassName?: string;
    pullRight?: boolean;
    rootClassName?: string;
    shadow?: boolean;
    sidebar?: any;
    sidebarClassName?: string;
    styles?: SidebarStyles;
    transitions?: boolean;
    touch?: boolean;
    touchHandleWidth?: number;
}

export interface SidebarStyles {
    content?: Partial<CSSStyleDeclaration>;
    dragHandle?: Partial<CSSStyleDeclaration>;
    overlay?: Partial<CSSStyleDeclaration>;
    root?: Partial<CSSStyleDeclaration>;
    sidebar?: Partial<CSSStyleDeclaration>;
}

export default class Sidebar extends Component<SidebarProps> {}
