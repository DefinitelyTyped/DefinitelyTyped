import { UIkitElement } from "../utils";

type UIkitStickyOptions = {
    top?: number | string;
    bottom?: boolean | string;
    offset?: number | string;
    animation?: string | boolean;
    'cls-active'?: string;
    'cls-inactive'?: string;
    'width-element'?: string | boolean;
    'show-on-up'?: boolean;
    media?: number | string | boolean;
    'target-offset'?: boolean | number;
}

type Sticky = (element: UIkitElement, options?: UIkitStickyOptions) => void;