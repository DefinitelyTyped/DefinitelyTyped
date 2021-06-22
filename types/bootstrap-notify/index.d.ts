// Type definitions for bootstrap-notify v3.1.3
// Project: http://bootstrap-notify.remabledesigns.com/
// Definitions by: Blake Niemyjski <https://github.com/niemyjski>, Robert McIntosh <https://github.com/mouse0270>, Robert Voica <https://github.com/robert-voica>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQueryStatic {
    notify(message: string): NotifyReturn;
    notify(opts: NotifyOptions, settings?: NotifySettings): NotifyReturn;
    notifyDefaults(settings: NotifySettings): void;
    notifyClose(): void;
    notifyClose(command: string): void;
}

interface NotifyOptions {
    message: string;
    title?: string;
    icon?: string;
    url?: string;
    target?: string;
}

interface NotifySettings {
    element?: string;
    position?: string;
    type?: string;
    allow_dismiss?: boolean;
    allow_duplicates?: boolean;
    newest_on_top?: boolean;
    showProgressbar?: boolean;
    placement?: {
        from?: string;
        align?: string;
    };
    offset?: number | {
        x?: number;
        y?: number;
    };
    spacing?: number;
    z_index?: number;
    delay?: number;
    timer?: number;
    url_target?: string;
    mouse_over?: string;
    animate?: {
        enter?: string;
        exit?: string;
    };
    onShow?: ($ele: JQuery) => void;
    onShown?: ($ele: JQuery) => void;
    onClose?: ($ele: JQuery) => void;
    onClosed?: ($ele: JQuery) => void;
    icon_type?: string;
    template?: string;
}

interface NotifyReturn {
    $ele: JQuery;
    close: () => void;
    update: (command: string, update: any) => void;
}
