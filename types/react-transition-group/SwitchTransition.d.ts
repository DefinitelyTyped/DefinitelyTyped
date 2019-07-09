import { Component } from "react";
import { TransitionProps } from "react-transition-group/Transition";

declare namespace SwitchTransition {
    interface SwitchTransitionProps extends TransitionProps {
        mode?: 'out-in' | 'in-out';
    }
}

declare class SwitchTransition extends Component<SwitchTransition.SwitchTransitionProps> { }

export = SwitchTransition;
