// Type definitions for json-server 0.14
// Project: https://github.com/typicode/json-server
// Definitions by: Jeremy Bensimon <https://github.com/jeremyben>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { NextHandleFunction } from 'connect';
import { Application, RequestHandler, Router } from 'express';

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
 * @param source Either a path to a json file (e.g. `'db.json'`) or an object in memory
 * @param options Set foreign key suffix (default: `'Id'`)
 */
export function router(source: string | object, options?: { foreignKeySuffix: string }): Router;

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
    static?: string;

    /**
     * Enable logger middleware
     * @default true
     */
    logger?: boolean;

    /**
     * Enable body-parser middleware
     * @default true
     */
    bodyParser?: boolean;

    /**
     * Disable CORS
     * @default false
     */
    noCors?: boolean;

    /**
     * Accept only GET requests
     * @default false
     */
    readOnly?: boolean;
}
