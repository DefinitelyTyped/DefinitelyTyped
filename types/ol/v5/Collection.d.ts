import { EventsKey } from './events';
import Event from './events/Event';
import BaseObject, { ObjectEvent } from './Object';

export interface Options {
    unique?: boolean;
}
export default class Collection<T> extends BaseObject {
    constructor(opt_array?: T[], opt_options?: Options);
    clear(): void;
    extend(arr: T[]): Collection<T>;
    forEach(f: (p0: T, p1: number, p2: T[]) => any): void;
    getArray(): T[];
    getLength(): number;
    insertAt(index: number, elem: T): void;
    item(index: number): T;
    pop(): T | undefined;
    push(elem: T): number;
    remove(elem: T): T | undefined;
    removeAt(index: number): T | undefined;
    setAt(index: number, elem: T): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'add', listener: (evt: CollectionEvent<T>) => void): EventsKey;
    once(type: 'add', listener: (evt: CollectionEvent<T>) => void): EventsKey;
    un(type: 'add', listener: (evt: CollectionEvent<T>) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:length', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:length', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:length', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'remove', listener: (evt: CollectionEvent<T>) => void): EventsKey;
    once(type: 'remove', listener: (evt: CollectionEvent<T>) => void): EventsKey;
    un(type: 'remove', listener: (evt: CollectionEvent<T>) => void): void;
}
export class CollectionEvent<T> extends Event {
    constructor();
    element: T;
}
