import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import PointerInteraction from './Pointer';

export type TPinchRotateBaseEventTypes = 'change' | 'error';
export type TPinchRotateObjectEventTypes = 'change:active' | 'propertychange';
export interface Options {
    duration?: number | undefined;
    threshold?: number | undefined;
}
export default class PinchRotate extends PointerInteraction {
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
    on(type: TPinchRotateBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TPinchRotateBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TPinchRotateBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TPinchRotateBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TPinchRotateBaseEventTypes | TPinchRotateBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TPinchRotateObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TPinchRotateObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TPinchRotateObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TPinchRotateObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TPinchRotateObjectEventTypes | TPinchRotateObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
