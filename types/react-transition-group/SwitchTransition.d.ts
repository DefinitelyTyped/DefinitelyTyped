import { Component } from "react";
import { TransitionProps } from "./Transition";

declare namespace SwitchTransition {
    const modes = {
        out: 'out-in',
        in: 'in-out'
    }
    
    interface SwitchTransitionProps extends TransitionProps {
        mode?: modes.out | modes.in;
    }
}

declare class SwitchTransition extends Component<SwitchTransition.SwitchTransitionProps> { }

export = SwitchTransition;
