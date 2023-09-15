// Type definitions for non-npm package jquery.notify 1.5
// Project: https://github.com/ehynds/jquery-notify (jQuery Notify UI Widget by Eric Hynds)
// Definitions by: Sergei Dorogin <https://github.com/evil-shrike>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface JQueryNotifyOptions {
    close?: (() => void) | undefined;
    open?: (() => void) | undefined;
    custom?: boolean | undefined;
    disabled?: boolean | undefined;
    expires?: number | undefined;
    queue?: boolean | undefined;
    speed?: number | undefined;
    stack?: "below" | "above" | undefined;
}
interface JQuery {
    notify(options?: JQueryNotifyOptions): JQueryNotifyWidget;
    notify(method: string, template: number, params?: object, opts?: JQueryNotifyOptions): JQueryNotifyInstance;
    notify(method: string, params?: object, opts?: JQueryNotifyOptions): JQueryNotifyInstance;
}
interface JQueryNotifyInstance {
    element: JQuery;
    isOpen: boolean;
    options: JQueryNotifyOptions;
    close(): void;
    open(): void;
}
interface JQueryNotifyWidget extends JQuery {
}
