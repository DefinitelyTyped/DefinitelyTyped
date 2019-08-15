// Type definitions for react-motion-loop 2.0
// Project: https://github.com/nkbt/react-motion-loop
// Definitions by: Jeremy Allard <https://github.com/j-em>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { Component, ReactElement } from "react";
import { MotionProps, PlainStyle, Style } from "react-motion";

interface ReactMotionLoopProps extends Partial<MotionProps> {
    styleFrom: Style;
    styleTo: Style;
    children?: (interpolatedStyle: PlainStyle) => ReactElement;
}
export class ReactMotionLoop extends Component<ReactMotionLoopProps> {}

export as namespace ReactMotionLoop;
