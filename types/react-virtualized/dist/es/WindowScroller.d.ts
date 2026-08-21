import { PureComponent } from "react";

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
export const IS_SCROLLING_TIMEOUT = 150;

export type WindowScrollerChildProps = {
    height: number;
    width: number;
    isScrolling: boolean;
    scrollTop: number;
    scrollLeft: number;
    onChildScroll: (params: { scrollTop: number }) => void;
    registerChild: (element?: Element | null) => void;
};

export type WindowScrollerProps = {
    /**
     * Function responsible for rendering children.
     * This function should implement the following signature:
     * ({ height, isScrolling, scrollLeft, scrollTop, width, onChildScroll }) => PropTypes.element
     */
    children: (params: WindowScrollerChildProps) => React.ReactNode;

    /** Callback to be invoked on-resize: ({ height, width }) */
    onResize?: ((params: { height: number; width: number }) => void) | undefined;

    /** Callback to be invoked on-scroll: ({ scrollLeft, scrollTop }) */
    onScroll?: ((params: { scrollLeft: number; scrollTop: number }) => void) | undefined;

    /** Element to attach scroll event listeners. Defaults to window. */
    scrollElement?: typeof window | Element | undefined;
    /**
     * Wait this amount of time after the last scroll event before resetting child `pointer-events`.
     */
    scrollingResetTimeInterval?: number | undefined;

    /** Height used for server-side rendering */
    serverHeight?: number | undefined;

    /** Width used for server-side rendering */
    serverWidth?: number | undefined;
    /**
     * PLEASE NOTE
     * The [key: string]: any; line is here on purpose
     * This is due to the need of force re-render of PureComponent
     * Check the following link if you want to know more
     * https://github.com/bvaughn/react-virtualized#pass-thru-props
     */
    [key: string]: any;
};

export type WindowScrollerState = {
    height: number;
    width: number;
    isScrolling: boolean;
    scrollLeft: number;
    scrollTop: number;
};

export class WindowScroller extends PureComponent<WindowScrollerProps, WindowScrollerState> {
    static defaultProps: {
        onResize: () => void;
        onScroll: () => void;
        scrollingResetTimeInterval: typeof IS_SCROLLING_TIMEOUT;
        scrollElement: Window | undefined;
        serverHeight: 0;
        serverWidth: 0;
    };

    updatePosition(scrollElement?: HTMLElement): void;
}

export default WindowScroller;
