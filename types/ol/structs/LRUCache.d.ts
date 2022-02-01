import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';

export type TLRUCacheBaseEventTypes = 'change' | 'error';
export interface Entry {
    key_: string;
    newer: any;
    older: any;
    value_: any;
}
export default class LRUCache<T> {
    constructor(opt_highWaterMark?: number);
    canExpireCache(): boolean;
    /**
     * FIXME empty description for jsdoc
     */
    clear(): void;
    containsKey(key: string): boolean;
    forEach(f: (p0: T, p1: string, p2: LRUCache<T>) => any): void;
    get(key: string, opt_options?: any): T;
    getCount(): number;
    getKeys(): string[];
    getValues(): T[];
    /**
     * Get the key of the newest item in the cache.  Throws if the cache is empty.
     */
    peekFirstKey(): string;
    peekLast(): T;
    peekLastKey(): string;
    pop(): T;
    /**
     * Remove an entry from the cache.
     */
    remove(key: string): T;
    replace(key: string, value: T): void;
    set(key: string, value: T): void;
    /**
     * Set a maximum number of entries for the cache.
     */
    setSize(size: number): void;
    on(type: TLRUCacheBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TLRUCacheBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TLRUCacheBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TLRUCacheBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TLRUCacheBaseEventTypes | TLRUCacheBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
}
