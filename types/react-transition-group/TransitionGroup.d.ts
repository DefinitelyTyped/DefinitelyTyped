import { Component, ReactType, HTMLProps } from "react";
import { TransitionActions } from "react-transition-group";

export interface TransitionGroupProps extends TransitionActions, HTMLProps<any> {
    component?: ReactType;
}

declare class TransitionGroup extends Component<TransitionGroupProps> {}

export default TransitionGroup;
