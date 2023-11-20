import * as CLS from "cls-hooked";
import * as Express from "express";
import * as Koa from "koa";

declare class ContextFactory {
    private _namespace: CLS.Namespace;

    /**
     * Returns a middleware function compatible with Koa that stores (or generates if missing)
     * the request identifier from the header (X-Request-Id) and sets it on the storage as request_id.
     */
    static getKoaMiddleware: () => Koa.Middleware;

    /**
     * Returns a middleware function compatible with Express that stores (or generates if missing)
     * the request identifier from the header (X-Request-Id) and sets it on the storage as request_id.
     */
    static getExpressMiddleware: () => Express.Handler;

    static run: CLS.Namespace["runAndReturn"];

    /**
     * Sets a key with a given value on the storage.
     */
    static setOnContext: CLS.Namespace["set"];

    /**
     * Returns the all the values set on the storage.
     */
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    static getContextStorage: <T = Record<string, unknown>>() => T & {
        requestId: string;
    };

    /**
     * Returns the the request identifier set on the storage. The identifiers key is request_id.
     */
    static getRequestId: () => string | undefined;

    /**
     * Returns a function that extends the given object with the current storage.
     */
    static addContextStorageToInput: () => <T extends {}>(input: T) => T & { requestId: string };

    /**
     * Returns a function that extends the given object with the request identifier set on the current storage.
     */
    static addRequestIdToInput: () => <T extends {}>(
        input: T,
    ) => T & { requestId: string };

    /**
     * Destroys (if exists) the namespace with the name 'session'
     */
    static destroyNamespace: () => void;

    /**
     * Creates (or returns existing namespace) with the namespace name 'session'
     */
    static createNamespace: () => CLS.Namespace;
}

export = ContextFactory;
