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
