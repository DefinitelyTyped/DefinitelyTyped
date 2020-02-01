import { UIkitElement } from "../utils";

type UIkitDropdownOptions = {
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

interface UIkitDropdownElement {
    show(): void;
    hide(): void;
}

type Dropdown = (element: UIkitElement, options?: UIkitDropdownOptions) => UIkitDropdownElement;