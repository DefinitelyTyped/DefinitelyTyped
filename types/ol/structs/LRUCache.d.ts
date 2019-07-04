import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import Target from 'ol/events/Target';
export interface Entry {
    key_: string;
    newer: { [key: string]: any };
    older: { [key: string]: any };
    value_: any;
}
export default class LRUCache<T> extends Target {
    constructor(opt_highWaterMark?: number);
    peekFirstKey(): string;
    canExpireCache(): boolean;
    containsKey(key: string): boolean;
    forEach<S>(f: (<T>(this: S, param1: T, param2: string, param3: LRUCache<T>) => void), opt_this?: S): void;
    get(key: string): T;
    getCount(): number;
    getKeys(): string[];
    getValues(): T[];
    clear(): void;
    peekLast(): T;
    peekLastKey(): string;
    pop(): T;
    prune(): void;
    remove(key: string): T;
    replace(key: string, value: T): void;
    set(key: string, value: T): void;
    setSize(size: number): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}
