import { UIkitElement } from "../utils";

type UIkitDropOptions = {
    toggle?: string | boolean;
    pos?: string;
    mode?: string;
    'delay-show'?: number;
    'delay-hide'?: number;
    boundary?: string;
    'boundary-align'?: boolean;
    flip?: boolean | string;
    offset?: number;
    animation?: string;
    duration?: number;
}

interface UIkitDropElement {
    show(): void;
    hide(): void;
}

type Drop = (element: UIkitElement, options?: UIkitDropOptions) => UIkitDropElement;