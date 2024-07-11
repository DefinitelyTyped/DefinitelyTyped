import * as LRUCache from "lru-cache";
import { Store } from "./index";

export = LruStore;

declare class LruStore implements Store {
    lru: LRUCache;

    constructor(defaults: DefaultOptions<string, any>);

    get(key: string): Promise<any>;
    set(key: string, value: any, ttlMillis: number): Promise<boolean>;
    del(key: string): Promise<void>;
}

interface DefaultOptions<K, V> {
    max?: number;
    length?: (value: V, key: K) => number;
    maxAge?: number;
}
