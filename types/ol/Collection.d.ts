import CollectionEventType from './CollectionEventType';
import BaseObject, { ObjectEvent } from './Object';
import { EventsKey, ListenerFunction } from './events';
import BaseEvent from './events/Event';

export type TCollectionCollectionEventTypes = 'add' | 'remove';
export type TCollectionBaseEventTypes = 'change' | 'error';
export type TCollectionObjectEventTypes = 'change:length' | 'propertychange';
export interface Options {
    unique?: boolean | undefined;
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
    on(type: TCollectionCollectionEventTypes, listener: ListenerFunction<CollectionEvent<T>>): EventsKey;
    on(type: TCollectionCollectionEventTypes[], listener: ListenerFunction<CollectionEvent<T>>): EventsKey[];
    once(type: TCollectionCollectionEventTypes, listener: ListenerFunction<CollectionEvent<T>>): EventsKey;
    once(type: TCollectionCollectionEventTypes[], listener: ListenerFunction<CollectionEvent<T>>): EventsKey[];
    un(
        type: TCollectionCollectionEventTypes | TCollectionCollectionEventTypes[],
        listener: ListenerFunction<CollectionEvent<T>>,
    ): void;
    on(type: TCollectionBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TCollectionBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TCollectionBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TCollectionBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TCollectionBaseEventTypes | TCollectionBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TCollectionObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TCollectionObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TCollectionObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TCollectionObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TCollectionObjectEventTypes | TCollectionObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
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
