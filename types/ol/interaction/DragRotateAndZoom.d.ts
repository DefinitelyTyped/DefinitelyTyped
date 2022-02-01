import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Condition } from '../events/condition';
import PointerInteraction from './Pointer';

export type TDragRotateAndZoomBaseEventTypes = 'change' | 'error';
export type TDragRotateAndZoomObjectEventTypes = 'change:active' | 'propertychange';
export interface Options {
    condition?: Condition | undefined;
    duration?: number | undefined;
}
export default class DragRotateAndZoom extends PointerInteraction {
    constructor(opt_options?: Options);
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
    on(type: TDragRotateAndZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TDragRotateAndZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TDragRotateAndZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TDragRotateAndZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TDragRotateAndZoomBaseEventTypes | TDragRotateAndZoomBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TDragRotateAndZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TDragRotateAndZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TDragRotateAndZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TDragRotateAndZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TDragRotateAndZoomObjectEventTypes | TDragRotateAndZoomObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
