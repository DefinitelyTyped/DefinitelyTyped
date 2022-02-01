import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Condition } from '../events/condition';
import Polygon from '../geom/Polygon';
import { Pixel } from '../pixel';
import PointerInteraction from './Pointer';

export type TDragBoxDragBoxEventTypes = 'boxcancel' | 'boxdrag' | 'boxend' | 'boxstart';
export type TDragBoxBaseEventTypes = 'change' | 'error';
export type TDragBoxObjectEventTypes = 'change:active' | 'propertychange';
/**
 * A function that takes a {@link module:ol/MapBrowserEvent} and two
 * {@link module:ol/pixel~Pixel}s and returns a {boolean}. If the condition is met,
 * true should be returned.
 */
export type EndCondition = (this: any, p0: MapBrowserEvent<UIEvent>, p1: Pixel, p2: Pixel) => boolean;
export interface Options {
    className?: string | undefined;
    condition?: Condition | undefined;
    minArea?: number | undefined;
    boxEndCondition?: EndCondition | undefined;
    onBoxEnd?: ((this: DragBox, p0: MapBrowserEvent<UIEvent>) => void) | undefined;
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
    on(type: TDragBoxDragBoxEventTypes, listener: ListenerFunction<DragBoxEvent>): EventsKey;
    on(type: TDragBoxDragBoxEventTypes[], listener: ListenerFunction<DragBoxEvent>): EventsKey[];
    once(type: TDragBoxDragBoxEventTypes, listener: ListenerFunction<DragBoxEvent>): EventsKey;
    once(type: TDragBoxDragBoxEventTypes[], listener: ListenerFunction<DragBoxEvent>): EventsKey[];
    un(type: TDragBoxDragBoxEventTypes | TDragBoxDragBoxEventTypes[], listener: ListenerFunction<DragBoxEvent>): void;
    on(type: TDragBoxBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TDragBoxBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TDragBoxBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TDragBoxBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TDragBoxBaseEventTypes | TDragBoxBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TDragBoxObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TDragBoxObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TDragBoxObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TDragBoxObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TDragBoxObjectEventTypes | TDragBoxObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
export class DragBoxEvent extends BaseEvent {
    constructor(type: string, coordinate: Coordinate, mapBrowserEvent: MapBrowserEvent<UIEvent>);
    /**
     * The coordinate of the drag event.
     */
    coordinate: Coordinate;
    mapBrowserEvent: MapBrowserEvent<UIEvent>;
}
