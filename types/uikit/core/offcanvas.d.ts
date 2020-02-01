import { UIkitElement } from "../utils";

type UIkitOffcanvasOptions = {
    mode?: string;
    flip?: boolean;
    overlay?: boolean;	
    'esc-close'?: boolean;	
    'bg-close'?: boolean;
    container?: string | boolean;
}

interface UIkitOffcanvasElement {
    show(): void;
    hide(): void;
}

type Offcanvas = (element: UIkitElement, options?: UIkitOffcanvasOptions) => UIkitOffcanvasElement;