// Type definitions for native-toast 2.0
// Project: https://github.com/egoist/native-toast
// Definitions by: Michael Nahkies <https://github.com/mnahkies>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const toast: {
    (options: toast.ToastOptions): toast.Toast,
    success: (options: toast.ToastOptions) => toast.Toast,
    warning: (options: toast.ToastOptions) => toast.Toast,
    info: (options: toast.ToastOptions) => toast.Toast,
    error: (options: toast.ToastOptions) => toast.Toast,
};

export = toast;

declare namespace toast {
    interface ToastOptions {
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

    interface Toast {
        show(): void;
        hide(): void;
        destroy(): void;
    }
}
