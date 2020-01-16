import { EventsKey } from './events';
import BaseEvent from './events/Event';
import Observable from './Observable';

export default class BaseObject extends Observable {
    constructor(opt_values?: { [key: string]: any });
    get(key: string): any;
    getKeys(): string[];
    getProperties(): { [key: string]: any };
    notify(key: string, oldValue: any): void;
    set(key: string, value: any, opt_silent?: boolean): void;
    setProperties(values: { [key: string]: any }, opt_silent?: boolean): void;
    unset(key: string, opt_silent?: boolean): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
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
    constructor();
    key: string;
    oldValue: any;
}
export function getChangeEventType(key: string): string;
