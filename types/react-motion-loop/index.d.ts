import { Component, ReactElement } from "react";
import { MotionProps, PlainStyle, Style } from "react-motion";

interface ReactMotionLoopProps extends Partial<MotionProps> {
    styleFrom: Style;
    styleTo: Style;
    children?: ((interpolatedStyle: PlainStyle) => ReactElement) | undefined;
}
export class ReactMotionLoop extends Component<ReactMotionLoopProps> {}

export as namespace ReactMotionLoop;
