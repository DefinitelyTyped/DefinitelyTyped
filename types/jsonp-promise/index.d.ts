export = jsonp;

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
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
