import { NextHandleFunction } from "connect";
import { Application, RequestHandler, Router } from "express";
import { LowdbSync } from "lowdb";

export interface JsonServerRouter<T> extends Router {
    db: LowdbSync<T>;
}

/**
 * Returns an Express server.
 */
export function create(): Application;

/**
 * Returns middlewares used by JSON Server.
 */
export function defaults(options?: MiddlewaresOptions): RequestHandler[];

/**
 * Returns JSON Server router.
 * @param source Either a path to a json file (e.g. `'db.json'`) or an object in memory.
 * This object will then be wrapped by lowdb, but you can also just pass in your own lowdb
 * instance that will then not be wrapped.
 * @param options Set foreign key suffix (default: `'Id'`)
 */
export function router<T extends object>(
    source: LowdbSync<T> | T | string,
    options?: { foreignKeySuffix: string },
): JsonServerRouter<T>;

/**
 * Add custom rewrite rules.
 */
export function rewriter(rules: { [rule: string]: string }): Router;

/**
 * Returns body-parser middleware used by JSON Server router.
 *
 * @returns
 * ```
 * [bodyParser.json({ limit: '10mb', extended: false }), bodyParser.urlencoded({ extended: false })]
 * ```
 */
export const bodyParser: [NextHandleFunction, NextHandleFunction];

export interface MiddlewaresOptions {
    /**
     * Path to static files
     * @default "public" (if folder exists)
     */
    static?: string | undefined;

    /**
     * Enable logger middleware
     * @default true
     */
    logger?: boolean | undefined;

    /**
     * Enable body-parser middleware
     * @default true
     */
    bodyParser?: boolean | undefined;

    /**
     * Disable compression
     * @default false
     */
    noGzip?: boolean | undefined;

    /**
     * Disable CORS
     * @default false
     */
    noCors?: boolean | undefined;

    /**
     * Accept only GET requests
     * @default false
     */
    readOnly?: boolean | undefined;
}
