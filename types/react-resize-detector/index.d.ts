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
    /**
     * Function that will be invoked with width and height arguments.
     * Default: undefined
     */
    onResize?: (width: number, height: number) => void;
    /**
     * Trigger onResize on height change.
     * Default: false
     */
    handleHeight?: boolean;
    /**
     * Trigger onResize on width change.
     * Default: false
     */
    handleWidth?: boolean;
    /**
     * Do not trigger onResize when a component mounts.
     * Default: false
     */
    skipOnMount?: boolean;
    /**
     * Possible values: "throttle" and "debounce".
     * See lodash docs for more information.
     * undefined - callback will be fired for every frame.
     * Default: undefined
     */
    refreshMode?: "throttle" | "debounce";
    /**
     * Use this in conjunction with refreshMode.
     * Important! It's a numeric prop so set it accordingly, e.g. refreshRate={500}.
     * efault: 1000.
     */
    refreshRate?: number;
    /**
     * Use this in conjunction with refreshMode. An object in shape of { leading: bool, trailing: bool }.
     * Please refer to lodash's docs for more info.
     * Default: undefined
     */
    refreshOptions?: { leading?: boolean; trailing?: boolean };
    /**
     * A selector of an element to observe.
     * You can use this property to attach resize-observer to any DOM element.
     * Please refer to the querySelector docs.
     * Default: undefined
     */
    querySelector?: string;
    /**
     * Valid only for a callback-pattern.
     * Ignored for other render types.
     * Set resize-detector's node type.
     * You can pass any valid React node: string with node's name or element.
     * Can be useful when you need to handle table's or paragraph's resizes.
     * Default: "div"
     */
    nodeType?: keyof React.ReactHTML; // will be passed to React.createElement()

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
