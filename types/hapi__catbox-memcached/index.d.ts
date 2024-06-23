import { CacheKey, ClientApi, ClientOptions } from "@hapi/catbox";

declare namespace CatboxMemcached {
    interface Options extends ClientOptions {
        host?: string | undefined;
        port?: number | undefined;
        location?: string | undefined;
        timeout?: number | undefined;
        idle?: number | undefined;
    }
}

interface CatboxMemcached<T> extends ClientApi<T> {}

declare class CatboxMemcached<T> implements ClientApi<T> {
    constructor(options?: CatboxMemcached.Options);
    generateKey(key: CacheKey): string;
}

export = CatboxMemcached;
