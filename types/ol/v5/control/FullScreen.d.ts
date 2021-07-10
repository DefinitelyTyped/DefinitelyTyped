import { EventsKey } from '../events';
import Event from '../events/Event';
import { ObjectEvent } from '../Object';
import Control from './Control';

export interface Options {
    className?: string | undefined;
    label?: string | Text | HTMLElement | undefined;
    labelActive?: string | Text | HTMLElement | undefined;
    tipLabel?: string | undefined;
    keys?: boolean | undefined;
    target?: HTMLElement | string | undefined;
    source?: HTMLElement | string | undefined;
}
export default class FullScreen extends Control {
    constructor(opt_options?: Options);
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
