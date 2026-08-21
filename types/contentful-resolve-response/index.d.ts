interface ResolveResponseOptions {
    removeUnresolved?: boolean;
    itemEntryPoints?: string[];
}

declare function resolveResponse(response: any, options?: ResolveResponseOptions): any;
export = resolveResponse;
