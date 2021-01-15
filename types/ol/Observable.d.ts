import { EventsKey } from './events';
import BaseEvent from './events/Event';
import Target from './events/Target';

export default class Observable extends Target {
    constructor();
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
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    /**
     * Listen once for a certain type of event.
     */
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    /**
     * Unlisten for a certain type of event.
     */
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
}
/**
 * Removes an event listener using the key returned by on() or once().
 */
export function unByKey(key: EventsKey | EventsKey[]): void;
