// Type definitions for typeform__embed 0.20
// Project: https://github.com/Typeform/embed
// Definitions by: Florian Merz <https://github.com/florianmrz>
//                 Gabriel Cangussu <https://github.com/gcangussu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface WidgetOptions {
    opacity?: number;
    buttonText?: string;
    hideScrollbars?: boolean;
    hideFooter?: boolean;
    hideHeaders?: boolean;
    onSubmit?: (event: OnSubmitEvent) => void;
    onReady?: () => void;
    disableTracking?: boolean;
}
export interface PopupOptions {
    mode?: 'popup' | 'drawer_left' | 'drawer_right';
    autoOpen?: boolean;
    autoClose?: number;
    hideScrollbars?: boolean;
    hideFooter?: boolean;
    hideHeaders?: boolean;
    drawerWidth?: number;
    onSubmit?: (event: OnSubmitEvent) => void;
    onReady?: () => void;
    onClose?: () => void;
    container?: HTMLElement;
    disableTracking?: boolean;
}
export interface OnSubmitEvent {
    /** ID of the response */
    response_id: string;
}
export interface PopupInstance {
    open: () => void;
    close: () => void;
}

export function makeWidget(element: HTMLElement, url: string, options: WidgetOptions): void;
export function makePopup(url: string, options: PopupOptions): PopupInstance;
