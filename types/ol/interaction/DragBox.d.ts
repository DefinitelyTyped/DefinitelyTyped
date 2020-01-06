import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import { Condition } from '../events/condition';
import BaseEvent from '../events/Event';
import Polygon from '../geom/Polygon';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { Pixel } from '../pixel';
import PointerInteraction from './Pointer';

export type EndCondition = (this: any, p0: MapBrowserEvent, p1: Pixel, p2: Pixel) => boolean;
export interface Options {
    className?: string;
    condition?: Condition;
    minArea?: number;
    boxEndCondition?: EndCondition;
    onBoxEnd?: (this: DragBox, p0: MapBrowserEvent) => void;
}
export enum DragBoxEventType {
    BOXSTART = 'boxstart',
    BOXDRAG = 'boxdrag',
    BOXEND = 'boxend',
}
export default class DragBox extends PointerInteraction {
    constructor(opt_options?: Options);
    defaultBoxEndCondition(mapBrowserEvent: MapBrowserEvent, startPixel: Pixel, endPixel: Pixel): boolean;
    getGeometry(): Polygon;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'boxdrag', listener: (evt: DragBoxEvent) => void): EventsKey;
    once(type: 'boxdrag', listener: (evt: DragBoxEvent) => void): EventsKey;
    un(type: 'boxdrag', listener: (evt: DragBoxEvent) => void): void;
    on(type: 'boxend', listener: (evt: DragBoxEvent) => void): EventsKey;
    once(type: 'boxend', listener: (evt: DragBoxEvent) => void): EventsKey;
    un(type: 'boxend', listener: (evt: DragBoxEvent) => void): void;
    on(type: 'boxstart', listener: (evt: DragBoxEvent) => void): EventsKey;
    once(type: 'boxstart', listener: (evt: DragBoxEvent) => void): EventsKey;
    un(type: 'boxstart', listener: (evt: DragBoxEvent) => void): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export class DragBoxEvent extends BaseEvent {
    constructor(type: string, coordinate: Coordinate, mapBrowserEvent: MapBrowserEvent);
    coordinate: Coordinate;
    mapBrowserEvent: MapBrowserEvent;
}
