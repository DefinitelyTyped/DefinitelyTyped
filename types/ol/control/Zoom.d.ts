import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { ObjectEvent } from '../Object';
import Control from './Control';

export interface Options {
    duration?: number | undefined;
    className?: string | undefined;
    zoomInClassName?: string | undefined;
    zoomOutClassName?: string | undefined;
    zoomInLabel?: string | HTMLElement | undefined;
    zoomOutLabel?: string | HTMLElement | undefined;
    zoomInTipLabel?: string | undefined;
    zoomOutTipLabel?: string | undefined;
    delta?: number | undefined;
    target?: HTMLElement | string | undefined;
}
export default class Zoom extends Control {
    constructor(opt_options?: Options);
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
