import { UIkitElement, UIkitNode } from "../utils";

type UIkitSwiterOptions = {
    connect?: string;
    toggle?: string;
    active?: number;
    animation?: string;
    duration?: number;
    swiping?: boolean;
}

type UIkitSwitcherElement = {
    show(index: string | number | UIkitNode): void;
}

type Switcher = (element: UIkitElement, options?: UIkitSwiterOptions) => UIkitSwitcherElement;