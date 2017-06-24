import { Component, HTMLAttributes, ReactElement, ReactType } from "react";
import { HTMLTransitionGroupProps } from "./index";

declare namespace TransitionGroup {
    interface TransitionGroupChildLifecycle {
        componentWillAppear?(callback: () => void): void;
        componentDidAppear?(): void;
        componentWillEnter?(callback: () => void): void;
        componentDidEnter?(): void;
        componentWillLeave?(callback: () => void): void;
        componentDidLeave?(): void;
    }

    type TransitionGroupProps = HTMLTransitionGroupProps<TransitionGroup>;
}

declare class TransitionGroup extends Component<TransitionGroup.TransitionGroupProps> {}

export = TransitionGroup;
