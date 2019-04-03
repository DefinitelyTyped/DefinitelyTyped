// Type definitions for react-resize-detector 4.0
// Project: https://github.com/maslianok/react-resize-detector
// Definitions by: Matthew James <https://github.com/matthew-matvei>
//                 James Greenleaf <https://github.com/aMoniker>
//                 Remin <https://github.com/rdrgn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

interface ReactResizeDetectorDimensions {
    height: number;
    width: number;
}

interface ReactResizeDetectorProps extends React.Props<ReactResizeDetector> {
    /** Trigger onResize on height change. Default: false */
    handleHeight?: boolean;
    /** Trigger onResize on width change. Default: false */
    handleWidth?: boolean;
    /** Function that will be invoked with width and height arguments */
    onResize?: (props: ReactResizeDetectorDimensions) => void;
    /** Id of the element we want to observe. If none provided, parentElement of the component will be used. Default: "" */
    querySelector?: string;
    /** Possible values: throttle and debounce */
    refreshMode?: "throttle" | "debounce";
    /** Makes sense only when refreshMode is set. Default: 1000. */
    refreshRate?: number;
    /** Do not trigger onResize when a component mounts. Default: false */
    skipOnMount?: boolean;

    render?: (props: ReactResizeDetectorDimensions) => React.ReactNode;
}

declare class ReactResizeDetector extends React.PureComponent<
    ReactResizeDetectorProps
> {}

export function withResizeDetector(
    WrappedComponent: React.ReactNode,
    props?: ReactResizeDetectorProps
): React.Component;

export default ReactResizeDetector;
