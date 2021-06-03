import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import { Condition } from '../events/condition';
import BaseEvent from '../events/Event';
import Polygon from '../geom/Polygon';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { Pixel } from '../pixel';
import PointerInteraction from './Pointer';

/**
 * A function that takes a {@link module:ol/MapBrowserEvent} and two
 * {@link module:ol/pixel~Pixel}s and returns a {boolean}. If the condition is met,
 * true should be returned.
 */
export type EndCondition = (this: any, p0: MapBrowserEvent<UIEvent>, p1: Pixel, p2: Pixel) => boolean;
export interface Options {
    className?: string;
    condition?: Condition;
    minArea?: number;
    boxEndCondition?: EndCondition;
    onBoxEnd?: (this: DragBox, p0: MapBrowserEvent<UIEvent>) => void;
}
export default class DragBox extends PointerInteraction {
    constructor(opt_options?: Options);
    /**
     * The default condition for determining whether the boxend event
     * should fire.
     */
    defaultBoxEndCondition(mapBrowserEvent: MapBrowserEvent<UIEvent>, startPixel: Pixel, endPixel: Pixel): boolean;
    /**
     * Returns geometry of last drawn box.
     */
    getGeometry(): Polygon;
    /**
     * Handle pointer down events.
     */
    handleDownEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Handle pointer drag events.
     */
    handleDragEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): void;
    /**
     * Handle pointer up events.
     */
    handleUpEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Function to execute just before onboxend is fired
     */
    onBoxEnd(event: MapBrowserEvent<UIEvent>): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'boxcancel', listener: (evt: DragBoxEvent) => void): EventsKey;
    once(type: 'boxcancel', listener: (evt: DragBoxEvent) => void): EventsKey;
    un(type: 'boxcancel', listener: (evt: DragBoxEvent) => void): void;
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
    constructor(type: string, coordinate: Coordinate, mapBrowserEvent: MapBrowserEvent<UIEvent>);
    /**
     * The coordinate of the drag event.
     */
    coordinate: Coordinate;
    mapBrowserEvent: MapBrowserEvent<UIEvent>;
}
