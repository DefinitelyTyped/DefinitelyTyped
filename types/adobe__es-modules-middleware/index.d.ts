import "karma";
import { NextHandleFunction } from "connect";

declare module "karma" {
    interface ConfigOptions {
        /**
         * used in Karma to aid in testing es-modules in the browser
         * see {@link https://github.com/adobe/es-modules-middleware}
         */
        esModulesMiddleware?: MiddlewareOptions | undefined;
    }
}

/**
 * used as a connect middleware by providing it with a map of url base path to file system path from which to serve files.
 * Any files served through the middleware will be processed to resolve import/export paths properly.
 */
export interface MiddlewareOptions {
    /** a map of url base path to file system path from which to serve files */
    paths: {
        [path: string]: string;
    };
}
export function middleware(options?: MiddlewareOptions): NextHandleFunction;
