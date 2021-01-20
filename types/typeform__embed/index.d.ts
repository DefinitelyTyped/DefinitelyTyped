// Type definitions for @typeform/embed 0.22
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
    mode?: 'popup' | 'drawer_left' | 'drawer_right' | 'popover';
    /**
     * @deprecated Use `open: 'load'` instead
     */
    autoOpen?: boolean;
    /**
     * Launch based on behavioral triggers
     */
    open?: 'exit' | 'load' | 'scroll' | 'time';
    /**
     * Configuration for behavioral triggers. Based on open:
     *   - `exit`: exit threshold in pixels
     *   - `scroll`: % of page scrolled
     *   - `time`: time in milliseconds
     */
    openValue?: number;
    autoClose?: number;
    hideScrollbars?: boolean;
    hideFooter?: boolean;
    hideHeaders?: boolean;
    /**
     * @deprecated Use `width` instead
     */
    drawerWidth?: number;
    /**
     * Specify the width of the drawer or popup (only applies if using mode
     * "drawer_left" or "drawer_right" or "popover")
     */
    width?: number;
    /**
     * Specify the height of the popup (only applies if using mode "popover")
     */
    height?: number;
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

export function makeWidget(element: HTMLElement, url: string, options?: WidgetOptions): void;
export function makePopup(url: string, options?: PopupOptions): PopupInstance;
