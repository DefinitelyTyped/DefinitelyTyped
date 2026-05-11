/// <reference types="bootbox" />

interface NgBootboxDialog {
    title?: string | undefined;
    message?: string | undefined;
    templateUrl?: string | undefined;
    locale?: string | undefined;
    callback?: (() => any) | undefined;
    onEscape?: (() => any | boolean) | undefined;
    show?: boolean | undefined;
    backdrop?: boolean | undefined;
    closeButton?: boolean | undefined;
    animate?: boolean | undefined;
    className?: string | undefined;
    size?: string | undefined;
    buttons?: BootboxButtonMap | undefined;
}

interface BootboxService {
    alert(msg: string): Promise<any>;
    confirm(msg: string): Promise<any>;
    prompt(msg: string): Promise<any>;
    customDialog(options: NgBootboxDialog): void;
    setDefaults(options: BootboxDefaultOptions): void;
    hideAll(): void;

    addLocale(name: string, values: BootboxLocaleValues): void;
    removeLocale(name: string): void;
    setLocale(name: string): void;
}

declare var $ngBootbox: BootboxService;
