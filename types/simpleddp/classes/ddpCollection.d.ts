import simpleDDP from "../index";
import { ddpFilterOptions } from "../options";
import { ddpOnChange } from "./ddpOnChange";
import { ddpReactiveCollection } from "./ddpReactiveCollection";

export interface CollectionChangeEvent<T> {
    changed: boolean | CollectionChangeEventData<T>;
    added: boolean | T;
    removed: boolean | T;
}

export interface CollectionChangeEventData<T> {
    prev: boolean | T;
    next: boolean | T;
    fields: Fields;
    fieldsChanged: FieldsChanged<T>;
    fieldsRemoved: unknown[];
    predicatePassed: boolean[];
}

export interface Fields {
    eventName: number;
    args: number;
}

export interface FieldsChanged<T> {
    eventName: string;
    args: T;
}

export class ddpCollection<T> {
    constructor(name: string, server: simpleDDP);
    exportData(format: "string" | "raw"): object | string;
    /**
     * Returns collection data based on filter and on passed settings. Supports skip, limit and sort.
     * Order is `filter` then `sort` then `skip` then `limit`.
     */
    fetch(options: ddpFilterOptions): object;
    /**
     * Allows to specify specific documents inside the collection for reactive data and fetching.
     * @param f Filter function, recieves as arguments object, index and array.
     */
    filter(filterFunc: (data: T) => boolean): this;
    /**
     * Imports data inside the collection and emits all relevant events. Both string and JS object types are supported.
     */
    importData(data: string | object): void;
    /**
     * Returns change observer.
     */
    onChange(f: (data: CollectionChangeEvent<T>) => void, filter?: (data: T) => boolean): ddpOnChange;
    /**
     * Returns reactive collection object.
     */
    reactive(settings: ddpFilterOptions): ddpReactiveCollection<T>;
}
