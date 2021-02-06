// Type definitions for @hapi/catbox-memcached 3.0
// Project: https://github.com/hapijs/catbox-memcached#readme
// Definitions by: Avery Fay <https://github.com/btmorex>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { CacheKey, ClientApi, ClientOptions } from '@hapi/catbox';

declare namespace CatboxMemcached {
    interface Options extends ClientOptions {
        host?: string;
        port?: number;
        location?: string;
        timeout?: number;
        idle?: number;
    }
}

interface CatboxMemcached<T> extends ClientApi<T> {}

declare class CatboxMemcached<T> implements ClientApi<T> {
    constructor(options?: CatboxMemcached.Options);
    generateKey(key: CacheKey): string;
}

export = CatboxMemcached;
