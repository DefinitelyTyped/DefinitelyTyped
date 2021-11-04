import { EventsKey } from '../events';
import Event from '../events/Event';
import { ObjectEvent } from '../Object';
import Control from './Control';

export interface Options {
    duration?: number | undefined;
    className?: string | undefined;
    zoomInLabel?: string | HTMLElement | undefined;
    zoomOutLabel?: string | HTMLElement | undefined;
    zoomInTipLabel?: string | undefined;
    zoomOutTipLabel?: string | undefined;
    delta?: number | undefined;
    target?: HTMLElement | string | undefined;
}
export default class Zoom extends Control {
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
