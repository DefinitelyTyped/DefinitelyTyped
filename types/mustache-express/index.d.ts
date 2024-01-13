import { Cache } from "lru-cache";

export = mustacheExpress;

declare function mustacheExpress(
    partialsPath?: string,
    partialsExt?: string,
): mustacheExpress.ExpessEngine;

declare namespace mustacheExpress {
    interface ExpessEngine {
        (path: string, options: any, cb: (...args: any[]) => any): any;
        cache: TemplateCache;
    }

    type TemplateCache = Cache<string, { name: string; data: string; partials: string[] }>;
}
