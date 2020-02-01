import { UIkitElement, UIkitNode } from "../utils";

type UIkitScrollOptions = {
    duration?: number;
    offset?: number;
}

interface UIkitScrollElement {
    scrollTo(el: string | UIkitNode): void;
}

type Scroll = (element: UIkitElement, options?: UIkitScrollOptions) => UIkitScrollElement;