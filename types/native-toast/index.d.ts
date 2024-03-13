declare const toast: {
    (options: toast.ToastOptions): toast.Toast;
    success: (options: toast.ToastOptions) => toast.Toast;
    warning: (options: toast.ToastOptions) => toast.Toast;
    info: (options: toast.ToastOptions) => toast.Toast;
    error: (options: toast.ToastOptions) => toast.Toast;
};

export = toast;

declare namespace toast {
    interface ToastOptions {
        message?: string | undefined;
        position?:
            | "center"
            | "west"
            | "east"
            | "south"
            | "south-west"
            | "south-east"
            | "north"
            | "north-west"
            | "north-east"
            | undefined;
        timeout?: number | undefined;
        el?: HTMLElement | undefined;
        rounded?: boolean | undefined;
        type?: "success" | "warning" | "info" | "error" | undefined;
        debug?: boolean | undefined;
        edge?: boolean | undefined;
        icon?: boolean | undefined;
        closeOnClick?: boolean | undefined;
        elements?: HTMLElement[] | undefined;
    }

    interface Toast {
        show(): void;
        hide(): void;
        destroy(): void;
    }
}
