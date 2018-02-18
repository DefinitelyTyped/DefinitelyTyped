// Type definitions for jQuery Lazy Load 1.9
// Project: https://github.com/tuupola/jquery_lazyload
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace jQueryLazyLoad {
    interface Options {
        threshold?: number;
        failure_limit?: number;
        event?: string;
        effect?: string;
        container?: JQuery;
        data_attribute?: string;
        skip_invisible?: boolean;
        appear?: null;
        load?: (elementsLeft?: number, options?: Options) => void;
        placeholder?: string;
    }
}
interface JQuery {
    lazyload(options?: jQueryLazyLoad.Options): JQuery;
    on(event: 'load', callback: ((options?: jQueryLazyLoad.Options) => void)): JQuery;
}
