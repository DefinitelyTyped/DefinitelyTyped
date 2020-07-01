// Type definitions for jquery-drawer 3.2
// Project: http://git.blivesta.com/drawer
// Definitions by: Pine Mizune <https://github.com/pine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />
/// <reference types="iscroll" />

interface JQueryDrawerClassOptions {
    nav?: string;
    toggle?: string;
    overlay?: string;
    open?: string;
    close?: string;
    dropdown?: string;
}

interface JQueryDrawerOptions {
    class?: JQueryDrawerClassOptions;
    iscroll?: IScrollOptions;
    showOverlay?: boolean;
}

interface JQuery {
    drawer(options?: JQueryDrawerOptions): JQuery;
    drawer(method: 'open'|'close'|'toggle'|'destroy'): JQuery;
    on(event: 'drawer.opened'|'drawer.closed', handler: () => void): JQuery;
}
