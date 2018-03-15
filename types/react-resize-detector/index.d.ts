// Type definitions for react-resize-detector 2.1
// Project: https://github.com/maslianok/react-resize-detector
// Definitions by: Matthew James <https://github.com/matthew-matvei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";

interface ReactResizeDetectorProps extends React.Props<ReactResizeDetector> {
    /** Function that will be invoked with width and height arguments */
    onResize: (width: number, height: number) => void;
    /** Trigger onResize on height change. Default: false */
    handleHeight?: boolean;
    /** Trigger onResize on width change. Default: false */
    handleWidth?: boolean;
    /** Do not trigger onResize when a component mounts. Default: false */
    skipOnMount?: boolean;
    /** Id of the element we want to observe. If none provided, parentElement of the component will be used. Default: "" */
    resizableElementId?: string;
}

declare class ReactResizeDetector extends React.PureComponent<ReactResizeDetectorProps> { }

export default ReactResizeDetector;
