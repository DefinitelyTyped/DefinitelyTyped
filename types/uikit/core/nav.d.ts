import { UIkitElement, UIkitNode } from "../utils";

type UIkitNavOptions = {
    targets?: string;
    toggle?: string;
    content?: string;
    collapsible?: boolean;
    multiple?: boolean;
    transition?: string;
    animation?: string;
    duration?: number;
}

interface UIkitNavElement {
    index: string | number | UIkitNode;
    animate: boolean;
}

type Nav = (element: UIkitElement, options?: UIkitNavOptions) => UIkitNavElement;