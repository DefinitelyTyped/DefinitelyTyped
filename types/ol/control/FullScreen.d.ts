import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { ObjectEvent } from '../Object';
import Control from './Control';

export interface Options {
    className?: string;
    label?: string | Text | HTMLElement;
    labelActive?: string | Text | HTMLElement;
    tipLabel?: string;
    keys?: boolean;
    target?: HTMLElement | string;
    source?: HTMLElement | string;
}
export default class FullScreen extends Control {
    constructor(opt_options?: Options);
    on(type: string | string[], listener: ListenerFunction): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'enterfullscreen', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'enterfullscreen', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'enterfullscreen', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'leavefullscreen', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'leavefullscreen', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'leavefullscreen', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
