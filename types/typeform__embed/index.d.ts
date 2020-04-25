// Type definitions for typeform__embed 0.16.0
// Project: https://github.com/Typeform/embed
// Definitions by: Florian Merz <https://github.com/florianmrz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module '@typeform/embed' {
    export function makeWidget(element: HTMLElement, url: string, options: WidgetOptions): void;
    export function makePopup(url: string, options: PopupOptions): PopupInstance;

    interface WidgetOptions {
        opacity?: number;
        buttonText?: string;
        hideScrollbars?: boolean;
        hideFooter?: boolean;
        hideHeaders?: boolean;
        onSubmit?: () => any;
        disableTracking?: boolean;
    }
    interface PopupOptions {
        mode?: 'popup' | 'drawer_left' | 'drawer_right';
        autoOpen?: boolean;
        autoClose?: number;
        hideScrollbars?: boolean;
        hideFooter?: boolean;
        hideHeaders?: boolean;
        drawerWidth?: number;
        onSubmit?: () => any;
        container?: HTMLElement;
        disableTracking?: boolean;
    }
    interface PopupInstance {
        open: () => void;
        close: () => void;
    }
}
