import { EventsKey } from '../events';
import Event from '../events/Event';
import Target from '../events/Target';

export interface Entry {
    key_: string;
    newer: any;
    older: any;
    value_: any;
}
export default class LRUCache<T> extends Target {
    constructor(opt_highWaterMark?: number);
    canExpireCache(): boolean;
    clear(): void;
    containsKey(key: string): boolean;
    forEach<S>(f: (<T>(this: S, p1: T, p2: string, p3: LRUCache<T>) => void), opt_this?: S): void;
    get(key: string): T;
    getCount(): number;
    getKeys(): string[];
    getValues(): T[];
    peekFirstKey(): string;
    peekLast(): T;
    peekLastKey(): string;
    pop(): T;
    prune(): void;
    remove(key: string): T;
    replace(key: string, value: T): void;
    set(key: string, value: T): void;
    setSize(size: number): void;
    on(type: string | string[], listener: ((p0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((p0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((p0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
