// Type definitions for JQuery Lazy Load 1.9
// Project: https://github.com/tuupola/jquery_lazyload, http://www.appelsiini.net/projects/lazyload
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace JQueryLazyLoad {
    interface Options {
        threshold?: number;
        failure_limit?: number;
        event?: string;
        effect?: string;
        container?: JQuery;
        data_attribute?: string;
        skip_invisible?: boolean;
        appear?: ((elementsLeft: number, options: Options) => void) | null;
        load?: (elementsLeft?: number, options?: Options) => void;
        placeholder?: string;
    }
}
interface JQuery {
    lazyload(options?: JQueryLazyLoad.Options): JQuery;
    on(event: 'load', callback: ((options?: JQueryLazyLoad.Options) => void)): JQuery;
}
