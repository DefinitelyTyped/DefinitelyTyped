/// <reference types="jquery" />
/// <reference types="iscroll" />

interface JQueryDrawerClassOptions {
    nav?: string | undefined;
    toggle?: string | undefined;
    overlay?: string | undefined;
    open?: string | undefined;
    close?: string | undefined;
    dropdown?: string | undefined;
}

interface JQueryDrawerOptions {
    class?: JQueryDrawerClassOptions | undefined;
    iscroll?: IScrollOptions | undefined;
    showOverlay?: boolean | undefined;
}

interface JQuery {
    drawer(options?: JQueryDrawerOptions): JQuery;
    drawer(method: "open" | "close" | "toggle" | "destroy"): JQuery;
    on(event: "drawer.opened" | "drawer.closed", handler: () => void): JQuery;
}
