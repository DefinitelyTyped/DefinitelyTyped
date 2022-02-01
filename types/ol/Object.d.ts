import Observable from './Observable';
import { EventsKey, Listener, ListenerFunction } from './events';
import BaseEvent from './events/Event';

export type TBaseObjectBaseEventTypes = 'change' | 'error';
export type TBaseObjectObjectEventTypes = 'propertychange';
export default class BaseObject extends Observable {
    constructor(opt_values?: Record<string, any>);
    /**
     * Apply any properties from another object without triggering events.
     */
    protected applyProperties(source: BaseObject): void;
    addChangeListener(key: string, listener: Listener): void;
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
    getProperties(): Record<string, any>;
    hasProperties(): boolean;
    notify(key: string, oldValue: any): void;
    removeChangeListener(key: string, listener: Listener): void;
    /**
     * Sets a value.
     */
    set(key: string, value: any, opt_silent?: boolean): void;
    /**
     * Sets a collection of key-value pairs.  Note that this changes any existing
     * properties and adds new ones (it does not remove any existing properties).
     */
    setProperties(values: Record<string, any>, opt_silent?: boolean): void;
    /**
     * Unsets a property.
     */
    unset(key: string, opt_silent?: boolean): void;
    on(type: TBaseObjectBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TBaseObjectBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TBaseObjectBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TBaseObjectBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TBaseObjectBaseEventTypes | TBaseObjectBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TBaseObjectObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TBaseObjectObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TBaseObjectObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TBaseObjectObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TBaseObjectObjectEventTypes | TBaseObjectObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
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
