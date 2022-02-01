import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Condition } from '../events/condition';
import { Extent as Extent_1 } from '../extent';
import { StyleLike } from '../style/Style';
import PointerInteraction from './Pointer';

export type TExtentBaseEventTypes = 'change' | 'error';
export type TExtentObjectEventTypes = 'change:active' | 'propertychange';
export type TExtentExtentEventTypes = 'extentchanged';
export interface Options {
    condition?: Condition | undefined;
    extent?: Extent_1 | undefined;
    boxStyle?: StyleLike | undefined;
    pixelTolerance?: number | undefined;
    pointerStyle?: StyleLike | undefined;
    wrapX?: boolean | undefined;
}
export default class Extent extends PointerInteraction {
    constructor(opt_options?: Options);
    /**
     * Returns the current drawn extent in the view projection (or user projection if set)
     */
    getExtent(): Extent_1;
    /**
     * Returns the current drawn extent in the view projection
     */
    getExtentInternal(): Extent_1;
    /**
     * Handle pointer down events.
     */
    handleDownEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Handle pointer drag events.
     */
    handleDragEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): void;
    handleEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Handle pointer up events.
     */
    handleUpEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Manually sets the drawn extent, using the view projection.
     */
    setExtent(extent: Extent_1): void;
    /**
     * Remove the interaction from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     */
    setMap(map: PluggableMap): void;
    on(type: TExtentBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TExtentBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TExtentBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TExtentBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TExtentBaseEventTypes | TExtentBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TExtentObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TExtentObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TExtentObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TExtentObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TExtentObjectEventTypes | TExtentObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TExtentExtentEventTypes, listener: ListenerFunction<ExtentEvent>): EventsKey;
    on(type: TExtentExtentEventTypes[], listener: ListenerFunction<ExtentEvent>): EventsKey[];
    once(type: TExtentExtentEventTypes, listener: ListenerFunction<ExtentEvent>): EventsKey;
    once(type: TExtentExtentEventTypes[], listener: ListenerFunction<ExtentEvent>): EventsKey[];
    un(type: TExtentExtentEventTypes | TExtentExtentEventTypes[], listener: ListenerFunction<ExtentEvent>): void;
}
export class ExtentEvent extends BaseEvent {
    constructor(extent: Extent_1);
    /**
     * The current extent.
     */
    extent: Extent_1;
}
