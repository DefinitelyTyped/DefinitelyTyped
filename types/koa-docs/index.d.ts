import { Middleware } from "koa";
import { Spec } from "koa-joi-router";

export {};

declare namespace koaDocs {
    interface Options {
        title?: string | undefined;
        version: string;
        routeHandlers?: string | undefined;
        theme?: string | undefined;
        groups: Array<{
            groupName: string;
            description?: string | undefined;
            extendedDescription?: string | undefined;
            prefix?: string | undefined;
            routes: Spec[];
        }>;
    }
}

export function get(path: string, options: koaDocs.Options): Middleware;
