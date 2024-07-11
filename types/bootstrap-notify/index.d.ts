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
    title?: string | undefined;
    icon?: string | undefined;
    url?: string | undefined;
    target?: string | undefined;
}

interface NotifySettings {
    element?: string | undefined;
    position?: string | undefined;
    type?: string | undefined;
    allow_dismiss?: boolean | undefined;
    allow_duplicates?: boolean | undefined;
    newest_on_top?: boolean | undefined;
    showProgressbar?: boolean | undefined;
    placement?: {
        from?: string | undefined;
        align?: string | undefined;
    } | undefined;
    offset?: number | {
        x?: number | undefined;
        y?: number | undefined;
    } | undefined;
    spacing?: number | undefined;
    z_index?: number | undefined;
    delay?: number | undefined;
    timer?: number | undefined;
    url_target?: string | undefined;
    mouse_over?: string | undefined;
    animate?: {
        enter?: string | undefined;
        exit?: string | undefined;
    } | undefined;
    onShow?: (($ele: JQuery) => void) | undefined;
    onShown?: (($ele: JQuery) => void) | undefined;
    onClose?: (($ele: JQuery) => void) | undefined;
    onClosed?: (($ele: JQuery) => void) | undefined;
    icon_type?: string | undefined;
    template?: string | undefined;
}

interface NotifyReturn {
    $ele: JQuery;
    close: () => void;
    update: (command: string, update: any) => void;
}
