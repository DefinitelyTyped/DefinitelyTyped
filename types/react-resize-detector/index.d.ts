// Type definitions for react-resize-detector 2.1
// Project: https://github.com/maslianok/react-resize-detector
// Definitions by: Matthew James <https://github.com/matthew-matvei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

interface ReactResizeDetectorProps extends React.Props<ReactResizeDetector> {
    onResize: (width: number, height: number) => void;
    handleHeight?: boolean;
    handleWidth?: boolean;
    skipOnMount?: boolean;
    resizableElementId?: string;
}

declare class ReactResizeDetector extends React.Component<ReactResizeDetectorProps> { }

export = ReactResizeDetector;
