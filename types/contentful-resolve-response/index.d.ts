// Type definitions for contentful-resolve-response v0.1.2
// Project: https://github.com/contentful/contentful-resolve-response
// Definitions by: Anton Karsten <https://github.com/antonkarsten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ResolveResponseOptions {
    removeUnresolved?: boolean;
    itemEntryPoints?: string[];
}

declare function resolveResponse(response: any, options?: ResolveResponseOptions): any;
export = resolveResponse;
