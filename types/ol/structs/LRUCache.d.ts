import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
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
    forEach(f: (p0: T, p1: string, p2: LRUCache<T>) => any): void;
    get(key: string, opt_options?: any): T;
    getCount(): number;
    getKeys(): string[];
    getValues(): T[];
    peekFirstKey(): string;
    peekLast(): T;
    peekLastKey(): string;
    pop(): T;
    remove(key: string): T;
    replace(key: string, value: T): void;
    set(key: string, value: T): void;
    setSize(size: number): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
}
