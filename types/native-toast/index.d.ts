// Type definitions for native-toast 2.0
// Project: https://github.com/egoist/native-toast
// Definitions by: Michael Nahkies <https://github.com/mnahkies>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const toast: {
    (options: ToastOptions): Toast,
    success: (options: ToastOptions) => Toast,
    warning: (options: ToastOptions) => Toast,
    info: (options: ToastOptions) => Toast,
    error: (options: ToastOptions) => Toast,
};

export default toast;

export interface ToastOptions {
    message?: string;
    position?: "center" | "west" | "east" | "south" | "south-west" | "south-east" | "north" | "north-west" | "north-east";
    timeout?: number;
    el?: HTMLElement;
    rounded?: boolean;
    type?: "success" | "warning" | "info" | "error";
    debug?: boolean;
    edge?: boolean;
    icon?: boolean;
    closeOnClick?: boolean;
    elements?: HTMLElement[];
}

export interface Toast {
    show(): void;
    hide(): void;
    destroy(): void;
}
