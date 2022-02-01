import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Condition } from '../events/condition';
import PointerInteraction from './Pointer';

export type TDragRotateBaseEventTypes = 'change' | 'error';
export type TDragRotateObjectEventTypes = 'change:active' | 'propertychange';
export interface Options {
    condition?: Condition | undefined;
    duration?: number | undefined;
}
export default class DragRotate extends PointerInteraction {
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
    on(type: TDragRotateBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TDragRotateBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TDragRotateBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TDragRotateBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TDragRotateBaseEventTypes | TDragRotateBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TDragRotateObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TDragRotateObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TDragRotateObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TDragRotateObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TDragRotateObjectEventTypes | TDragRotateObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
