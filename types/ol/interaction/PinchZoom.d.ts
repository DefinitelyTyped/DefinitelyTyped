import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import PointerInteraction from './Pointer';

export type TPinchZoomBaseEventTypes = 'change' | 'error';
export type TPinchZoomObjectEventTypes = 'change:active' | 'propertychange';
export interface Options {
    duration?: number | undefined;
}
export default class PinchZoom extends PointerInteraction {
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
    on(type: TPinchZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TPinchZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TPinchZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TPinchZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TPinchZoomBaseEventTypes | TPinchZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TPinchZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TPinchZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TPinchZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TPinchZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TPinchZoomObjectEventTypes | TPinchZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
