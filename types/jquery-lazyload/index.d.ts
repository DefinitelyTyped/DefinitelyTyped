// Type definitions for JQuery Lazy Load 1.9
// Project: https://github.com/tuupola/jquery_lazyload, http://www.appelsiini.net/projects/lazyload
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace JQueryLazyLoad {
    interface Options {
        threshold?: number | undefined;
        failure_limit?: number | undefined;
        event?: string | undefined;
        effect?: string | undefined;
        container?: JQuery | undefined;
        data_attribute?: string | undefined;
        skip_invisible?: boolean | undefined;
        appear?: ((elementsLeft: number, options: Options) => void) | null | undefined;
        load?: ((elementsLeft?: number, options?: Options) => void) | undefined;
        placeholder?: string | undefined;
    }
}
interface JQuery {
    lazyload(options?: JQueryLazyLoad.Options): JQuery;
    on(event: "load", callback: (options?: JQueryLazyLoad.Options) => void): JQuery;
}
