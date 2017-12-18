import { Validator, Requireable, PureComponent } from 'react'

export type WindowScrollerChildProps = {
    height: number,
    width: number,
    isScrolling: boolean,
    scrollTop: number,
    onChildScroll: () => void
};

export type WindowScrollerProps = {
    /**
     * Function responsible for rendering children.
     * This function should implement the following signature:
     * ({ height: number, width: number, isScrolling: boolean, scrollTop: number, onChildScroll: function }) => PropTypes.element
     */
    children?: (props: WindowScrollerChildProps) => React.ReactNode;
    /** Callback to be invoked on-resize: ({ height }) */
    onResize?: (params: { height: number, width: number }) => void;
    /** Callback to be invoked on-scroll: ({ scrollTop }) */
    onScroll?: (params: { scrollTop: number }) => void;
    /** Element to attach scroll event listeners. Defaults to window. */
    scrollElement?: HTMLElement;
    /** Wait this amount of time after the last scroll event before resetting WindowScroller pointer-events; defaults to 150ms */
    scrollingResetTimeInterval?: number;
    /**
     * PLEASE NOTE
     * The [key: string]: any; line is here on purpose
     * This is due to the need of force re-render of PureComponent
     * Check the following link if you want to know more
     * https://github.com/bvaughn/react-virtualized#pass-thru-props
     */
    [key: string]: any;
}

export type WindowScrollerState = {
    height: number,
    width: number,
    isScrolling: boolean,
    scrollLeft: number
    scrollTop: number
}

export class WindowScroller extends PureComponent<WindowScrollerProps, WindowScrollerState> {
    static propTypes: {
        children: Requireable<(props: WindowScrollerChildProps) => React.ReactNode>,
        onResize: Validator<(params: { height: number, width: number }) => void>,
        onScroll: Validator<(params: { scrollTop: number }) => void>,
        scrollElement: Validator<HTMLElement>,
        scrollingResetTimeInterval: Validator<number>
    };

    static defaultProps: {
        onResize: () => {},
        onScroll: () => {},
        scrollingResetTimeInterval: 150
    };

    constructor(props: WindowScrollerProps);

    // Can’t use defaultProps for scrollElement without breaking server-side rendering
    readonly scrollElement: HTMLElement | Window;

    updatePosition(scrollElement?: HTMLElement): void;

    componentDidMount(): void;

    componentWillReceiveProps(nextProps: WindowScrollerProps): void;

    componentWillUnmount(): void;

    render(): JSX.Element;
}
