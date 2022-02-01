import Kinetic from '../Kinetic';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Condition } from '../events/condition';
import PointerInteraction from './Pointer';

export type TDragPanBaseEventTypes = 'change' | 'error';
export type TDragPanObjectEventTypes = 'change:active' | 'propertychange';
export interface Options {
    condition?: Condition | undefined;
    onFocusOnly?: boolean | undefined;
    kinetic?: Kinetic | undefined;
}
export default class DragPan extends PointerInteraction {
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
    on(type: TDragPanBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TDragPanBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TDragPanBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TDragPanBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TDragPanBaseEventTypes | TDragPanBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TDragPanObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TDragPanObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TDragPanObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TDragPanObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TDragPanObjectEventTypes | TDragPanObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
