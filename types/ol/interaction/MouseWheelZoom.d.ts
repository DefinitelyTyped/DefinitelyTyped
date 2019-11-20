import { EventsKey } from '../events';
import { Condition } from '../events/condition';
import Event from '../events/Event';
import { ObjectEvent } from '../Object';
import Interaction from './Interaction';

export interface Options {
    condition?: Condition;
    duration?: number;
    timeout?: number;
    constrainResolution?: boolean;
    useAnchor?: boolean;
}
export enum Mode {
    TRACKPAD = 'trackpad',
    WHEEL = 'wheel',
}
export default class MouseWheelZoom extends Interaction {
    constructor(opt_options?: Options);
    setMouseAnchor(useAnchor: boolean): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
