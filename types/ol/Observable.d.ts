import { EventsKey, ListenerFunction } from './events';
import BaseEvent from './events/Event';
import Target from './events/Target';

export type TObservableBaseEventTypes = 'change' | 'error';
export type EventTypes = 'change' | 'error';
export default class Observable extends Target {
    constructor();
    protected onceInternal(type: string | string[], listener: (p0: Event | BaseEvent) => any): EventsKey | EventsKey[];
    protected onInternal(type: string | string[], listener: (p0: Event | BaseEvent) => any): EventsKey | EventsKey[];
    /**
     * Unlisten for a certain type of event.
     */
    protected unInternal(type: string | string[], listener: (p0: Event | BaseEvent) => any): void;
    /**
     * Increases the revision counter and dispatches a 'change' event.
     */
    changed(): void;
    /**
     * Get the version number for this object.  Each time the object is modified,
     * its version number will be incremented.
     */
    getRevision(): number;
    /**
     * Listen for a certain type of event.
     */
    on(type: string | string[], listener: ListenerFunction<Event | BaseEvent>): EventsKey | EventsKey[];
    /**
     * Listen once for a certain type of event.
     */
    once(type: string | string[], listener: ListenerFunction<Event | BaseEvent>): EventsKey | EventsKey[];
    /**
     * Unlisten for a certain type of event.
     */
    un(type: string | string[], listener: ListenerFunction<Event | BaseEvent>): void;
    on(type: TObservableBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TObservableBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TObservableBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TObservableBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TObservableBaseEventTypes | TObservableBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
}
/**
 * Removes an event listener using the key returned by on() or once().
 */
export function unByKey(key: EventsKey | EventsKey[]): void;
