// Type definitions for koa-docs 2.1
// Project: https://github.com/a-s-o/koa-docs#readme
// Definitions by: 4doge <https://github.com/4doge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Middleware } from 'koa';
import { Spec } from 'koa-joi-router';

export {};

declare namespace koaDocs {
    interface Options {
        title?: string;
        version: string;
        routeHandlers?: string;
        theme?: string;
        groups: Array<{
            groupName: string;
            description?: string;
            extendedDescription?: string;
            prefix?: string;
            routes: Spec[];
        }>;
    }
}

export function get(path: string, options: koaDocs.Options): Middleware;
