// Type definitions for jsonp-promise 0.1
// Project: https://github.com/alexbardas/jsonp-promise
// Definitions by: Phi <https://github.com/cdpark0530>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = jsonp;

// tslint:disable-next-line no-unnecessary-generics
declare function jsonp<R = unknown>(url: string, options?: JsonpOptions): JsonpResult<R>;

interface JsonpResult<R> {
    promise: Promise<R>;
    cancel: () => void;
}

interface JsonpOptions {
    param?: string;
    timeout?: number;
    prefix?: string;
}
