import { PureComponent, Validator, Requireable } from 'react';
import * as PropTypes from 'prop-types';

export type Size = {
    height: number;
    width: number;
};
export type Dimensions = Size;

export type AutoSizerProps = {
    /**
     * Function responsible for rendering children.
     * This function should implement the following signature:
     * ({ height, width }) => PropTypes.element
     */
    children: (props: Size) => React.ReactNode;
    /**
     *     Optional custom CSS class name to attach to root AutoSizer element.
     * This is an advanced property and is not typically necessary.
     */
    className?: string;
    /**
     * Height passed to child for initial render; useful for server-side rendering.
     * This value will be overridden with an accurate height after mounting.
     */
    defaultHeight?: number;
    /**
     * Width passed to child for initial render; useful for server-side rendering.
     * This value will be overridden with an accurate width after mounting.
     */
    defaultWidth?: number;
    /** Disable dynamic :height property */
    disableHeight?: boolean;
    /** Disable dynamic :width property */
    disableWidth?: boolean;
    /** Nonce of the inlined stylesheet for Content Security Policy */
    nonce?: string;
    /** Callback to be invoked on-resize: ({ height, width }) */
    onResize?: (info: Size) => any;
    /**
     * Optional custom inline style to attach to root AutoSizer element.
     * This is an advanced property and is not typically necessary.
     */
    style?: React.CSSProperties;
    /**
     * PLEASE NOTE
     * The [key: string]: any; line is here on purpose
     * This is due to the need of force re-render of PureComponent
     * Check the following link if you want to know more
     * https://github.com/bvaughn/react-virtualized#pass-thru-props
     */
    [key: string]: any;
};
/**
 * Decorator component that automatically adjusts the width and height of a single child.
 * Child component should not be declared as a child but should rather be specified by a `ChildComponent` property.
 * All other properties will be passed through to the child component.
 */
export class AutoSizer extends PureComponent<AutoSizerProps, Size> {
    static defaultProps: {
        onResize: () => void;
        disableHeight: false;
        disableWidth: false;
        style: {};
    };

    constructor(props: AutoSizerProps);

    componentDidMount(): void;

    componentWillUnmount(): void;

    render(): JSX.Element;
}
