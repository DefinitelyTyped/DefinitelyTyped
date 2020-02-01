import { UIkitElement } from "../utils";

type UIkitAlertOptions = {
    animation?: boolean | string;
    duration?: number;	
    'sel-close'?: string;
}

interface UIkitAlertElement {
    close(): void;
}


export type Alert = (element: UIkitElement, options?: UIkitAlertOptions) => UIkitAlertElement;