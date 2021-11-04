import { EventsKey } from './events';
import BaseEvent from './events/Event';
import Observable from './Observable';

export default class BaseObject extends Observable {
    constructor(opt_values?: { [key: string]: any });
    /**
     * Apply any properties from another object without triggering events.
     */
    protected applyProperties(source: BaseObject): void;
    /**
     * Gets a value.
     */
    get(key: string): any;
    /**
     * Get a list of object property names.
     */
    getKeys(): string[];
    /**
     * Get an object of all property names and values.
     */
    getProperties(): { [key: string]: any };
    hasProperties(): boolean;
    notify(key: string, oldValue: any): void;
    /**
     * Sets a value.
     */
    set(key: string, value: any, opt_silent?: boolean): void;
    /**
     * Sets a collection of key-value pairs.  Note that this changes any existing
     * properties and adds new ones (it does not remove any existing properties).
     */
    setProperties(values: { [key: string]: any }, opt_silent?: boolean): void;
    /**
     * Unsets a property.
     */
    unset(key: string, opt_silent?: boolean): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export class ObjectEvent extends BaseEvent {
    constructor(type: string, key: string, oldValue: any);
    /**
     * The name of the property whose value is changing.
     */
    key: string;
    /**
     * The old value. To get the new value use e.target.get(e.key) where
     * e is the event object.
     */
    oldValue: any;
}
export function getChangeEventType(key: string): string;
