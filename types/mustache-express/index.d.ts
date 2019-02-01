// Type definitions for mustache-express 1.2
// Project: https://github.com/bryanburgers/node-mustache-express#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Cache } from 'lru-cache';

export = mustacheExpress;

declare function mustacheExpress(
    partialsPath?: string,
    partialsExt?: string
): mustacheExpress.ExpessEngine;

declare namespace mustacheExpress {
    interface ExpessEngine {
        (path: string, options: any, cb: (...args: any[]) => any): any;
        cache: TemplateCache;
    }

    type TemplateCache = Cache<string, { name: string; data: string; partials: string[] }>;
}
