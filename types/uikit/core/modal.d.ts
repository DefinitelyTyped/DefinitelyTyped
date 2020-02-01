import { UIkitElement } from "../utils";

type UIkitModalOptions = {
    'esc-close'?: boolean;
    'bg-close'?: boolean;
    stack?: boolean;
    container?: string | boolean;
    'cls-page'?: string;	
    'cls-panel'?: string;
    'sel-close'?: string;
}

interface UIkitModalElement {
    show(): void;
    hide(): void;
}

export interface Modal {
    (element: UIkitElement, options?: UIkitModalOptions): UIkitModalElement;
    alert(message: string, options?: UIkitModalOptions): Promise<void>;
    confirm(message: string, options?: UIkitModalOptions): Promise<void>;
    prompt(content: string, value: string, options?: UIkitModalOptions): Promise<void>;
    dialog(content: string, options?: UIkitModalOptions): Promise<void>;
    labels: {
        ok: string;
        cancel: string;
    };
}