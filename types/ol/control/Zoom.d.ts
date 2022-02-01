import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import Control from './Control';

export type TZoomBaseEventTypes = 'change' | 'error';
export type TZoomObjectEventTypes = 'propertychange';
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
    on(type: TZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TZoomBaseEventTypes | TZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TZoomObjectEventTypes | TZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
