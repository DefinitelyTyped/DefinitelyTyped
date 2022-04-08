// Type definitions for react-virtualized-auto-sizer 1.0
// Project: https://github.com/bvaughn/react-virtualized-auto-sizer/
// Definitions by: Hidemi Yukita <https://github.com/otofu-square>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface Size {
    height: number;
    width: number;
}

export interface AutoSizerProps {
    /** Function responsible for rendering children. */
    children: (size: Size) => React.ReactNode;

    /** Optional custom CSS class name to attach to root AutoSizer element.    */
    className?: string;

    /** Default height to use for initial render; useful for SSR */
    defaultHeight?: number;

    /** Default width to use for initial render; useful for SSR */
    defaultWidth?: number;

    /** Disable dynamic :height property */
    disableHeight?: boolean;

    /** Disable dynamic :width property */
    disableWidth?: boolean;

    /** Nonce of the inlined stylesheet for Content Security Policy */
    nonce?: string;

    /** Callback to be invoked on-resize */
    onResize?: (size: Size) => void;

    /** Optional inline style */
    style?: React.CSSProperties;
}

export default class extends React.Component<AutoSizerProps> {}
