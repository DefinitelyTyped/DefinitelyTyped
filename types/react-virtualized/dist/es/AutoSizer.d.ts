import { PropTypes, PureComponent, Validator, Requireable } from 'react'

export type Dimensions = {
    height: number,
    width: number
}

export type AutoSizerProps = {
    disableHeight?: boolean;
    disableWidth?: boolean;
    onResize?: (info: { height: number, width: number }) => any;
    children?: (props: Dimensions) => React.ReactNode
};
/**
 * Decorator component that automatically adjusts the width and height of a single child.
 * Child component should not be declared as a child but should rather be specified by a `ChildComponent` property.
 * All other properties will be passed through to the child component.
 */
export class AutoSizer extends PureComponent<AutoSizerProps, Dimensions> {
    static propTypes: {
        /**
         * Function responsible for rendering children.
         * This function should implement the following signature:
         * ({ height, width }) => PropTypes.element
         */
        children: Validator<(props: Dimensions) => React.ReactNode>,

        /** Disable dynamic :height property */
        disableHeight: Requireable<boolean>,

        /** Disable dynamic :width property */
        disableWidth: Requireable<boolean>,

        /** Callback to be invoked on-resize: ({ height, width }) */
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
