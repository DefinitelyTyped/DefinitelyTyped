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
    className?: string | undefined;

    /** Default height to use for initial render; useful for SSR */
    defaultHeight?: number | undefined;

    /** Default width to use for initial render; useful for SSR */
    defaultWidth?: number | undefined;

    /** Disable dynamic :height property */
    disableHeight?: boolean | undefined;

    /** Disable dynamic :width property */
    disableWidth?: boolean | undefined;

    /** Nonce of the inlined stylesheet for Content Security Policy */
    nonce?: string | undefined;

    /** Callback to be invoked on-resize */
    onResize?: ((size: Size) => void) | undefined;

    /** Optional inline style */
    style?: React.CSSProperties | undefined;
}

export default class extends React.Component<AutoSizerProps> {}
