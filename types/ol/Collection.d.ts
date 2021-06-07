import CollectionEventType from './CollectionEventType';
import { EventsKey } from './events';
import BaseEvent from './events/Event';
import BaseObject, { ObjectEvent } from './Object';

export interface Options {
    unique?: boolean;
}
export default class Collection<T> extends BaseObject {
    constructor(opt_array?: T[], opt_options?: Options);
    /**
     * Remove all elements from the collection.
     */
    clear(): void;
    /**
     * Add elements to the collection.  This pushes each item in the provided array
     * to the end of the collection.
     */
    extend(arr: T[]): Collection<T>;
    /**
     * Iterate over each element, calling the provided callback.
     */
    forEach(f: (p0: T, p1: number, p2: T[]) => any): void;
    /**
     * Get a reference to the underlying Array object. Warning: if the array
     * is mutated, no events will be dispatched by the collection, and the
     * collection's "length" property won't be in sync with the actual length
     * of the array.
     */
    getArray(): T[];
    /**
     * Get the length of this collection.
     */
    getLength(): number;
    /**
     * Insert an element at the provided index.
     */
    insertAt(index: number, elem: T): void;
    /**
     * Get the element at the provided index.
     */
    item(index: number): T;
    /**
     * Remove the last element of the collection and return it.
     * Return undefined if the collection is empty.
     */
    pop(): T | undefined;
    /**
     * Insert the provided element at the end of the collection.
     */
    push(elem: T): number;
    /**
     * Remove the first occurrence of an element from the collection.
     */
    remove(elem: T): T | undefined;
    /**
     * Remove the element at the provided index and return it.
     * Return undefined if the collection does not contain this index.
     */
    removeAt(index: number): T | undefined;
    /**
     * Set the element at the provided index.
     */
    setAt(index: number, elem: T): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'add', listener: (evt: CollectionEvent<T>) => void): EventsKey;
    once(type: 'add', listener: (evt: CollectionEvent<T>) => void): EventsKey;
    un(type: 'add', listener: (evt: CollectionEvent<T>) => void): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:length', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:length', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:length', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'remove', listener: (evt: CollectionEvent<T>) => void): EventsKey;
    once(type: 'remove', listener: (evt: CollectionEvent<T>) => void): EventsKey;
    un(type: 'remove', listener: (evt: CollectionEvent<T>) => void): void;
}
export class CollectionEvent<T> extends BaseEvent {
    constructor(type: CollectionEventType, opt_element?: T, opt_index?: number);
    /**
     * The element that is added to or removed from the collection.
     */
    element: T;
    /**
     * The index of the added or removed element.
     */
    index: number;
}
