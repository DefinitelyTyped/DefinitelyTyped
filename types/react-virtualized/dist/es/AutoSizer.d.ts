import { PureComponent, Validator, Requireable } from 'react'
import * as PropTypes from 'prop-types'

export type Dimensions = {
    height: number,
    width: number
}

export type AutoSizerProps = {
    /** Disable dynamic :height property */
    disableHeight?: boolean;
    /** Disable dynamic :width property */
    disableWidth?: boolean;
    /** Nonce of the inlined stylesheet for Content Security Policy */
    nonce?: string;
    /** Callback to be invoked on-resize: ({ height, width }) */
    onResize?: (info: { height: number, width: number }) => any;
    /**
     * Function responsible for rendering children.
     * This function should implement the following signature:
     * ({ height, width }) => PropTypes.element
     */
    children?: (props: Dimensions) => React.ReactNode
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
export class AutoSizer extends PureComponent<AutoSizerProps, Dimensions> {
    static propTypes: {
        children: Validator<(props: Dimensions) => React.ReactNode>,
        disableHeight: Requireable<boolean>,
        disableWidth: Requireable<boolean>,
        nonce: Validator<string>,
        onResize: Validator<(props: Dimensions) => any>
    };

    static defaultProps: {
        onResize: () => {}
    };

    constructor(props: AutoSizerProps);

    componentDidMount(): void;

    componentWillUnmount(): void;

    render(): JSX.Element;
}
