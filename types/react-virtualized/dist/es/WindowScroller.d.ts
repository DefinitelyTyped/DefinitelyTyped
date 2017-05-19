import { Validator, Requireable, PureComponent } from 'react'

export type WindowScrollerChildProps = {
    height: number,
    isScrolling: boolean,
    scrollTop: number
};

export type WindowScrollerProps = {
    /**
     * Function responsible for rendering children.
     * This function should implement the following signature:
     * ({ height, isScrolling, scrollTop }) => PropTypes.element
     */
    children?: (props: WindowScrollerChildProps) => React.ReactNode;
    /** Callback to be invoked on-resize: ({ height }) */
    onResize?: (prams: { height: number }) => void;
    /** Callback to be invoked on-scroll: ({ scrollTop }) */
    onScroll?: (params: { scrollTop: number }) => void;
    /** Element to attach scroll event listeners. Defaults to window. */
    scrollElement?: HTMLElement;
}
export type WindowScrollerState = {
    height: number,
    isScrolling: boolean,
    scrollTop: number
}

export class WindowScroller extends PureComponent<WindowScrollerProps, WindowScrollerState> {
    static propTypes: {
        children: Validator<(props: WindowScrollerChildProps) => React.ReactNode>,
        onResize: Validator<(params: { height: number }) => void>,
        onScroll: Validator<(params: { scrollTop: number }) => void>,
        scrollElement: HTMLElement
    };

    static defaultProps: {
        onResize: () => {},
        onScroll: () => {}
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
