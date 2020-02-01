import { UIkitElement, UIkitNode } from "../utils";

type UIkitTabOptions = {
    connect?: string;
    toggle?: string;
    active?: number;
    animation?: string;
    duration?: number;
    swiping?: boolean;
    media?: number | string;
}

type UIkitTabElement = {
    show(index: string | number | UIkitNode): void;
}

type Tab = (element: UIkitElement, options?: UIkitTabOptions) => UIkitTabElement;