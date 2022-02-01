import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Condition } from '../events/condition';
import DragBox, { DragBoxEvent } from './DragBox';

export type TDragZoomDragBoxEventTypes = 'boxcancel' | 'boxdrag' | 'boxend' | 'boxstart';
export type TDragZoomBaseEventTypes = 'change' | 'error';
export type TDragZoomObjectEventTypes = 'change:active' | 'propertychange';
export interface Options {
    className?: string | undefined;
    condition?: Condition | undefined;
    duration?: number | undefined;
    out?: boolean | undefined;
    minArea?: number | undefined;
}
export default class DragZoom extends DragBox {
    constructor(opt_options?: Options);
    /**
     * Function to execute just before onboxend is fired
     */
    onBoxEnd(event: MapBrowserEvent<UIEvent>): void;
    on(type: TDragZoomDragBoxEventTypes, listener: ListenerFunction<DragBoxEvent>): EventsKey;
    on(type: TDragZoomDragBoxEventTypes[], listener: ListenerFunction<DragBoxEvent>): EventsKey[];
    once(type: TDragZoomDragBoxEventTypes, listener: ListenerFunction<DragBoxEvent>): EventsKey;
    once(type: TDragZoomDragBoxEventTypes[], listener: ListenerFunction<DragBoxEvent>): EventsKey[];
    un(type: TDragZoomDragBoxEventTypes | TDragZoomDragBoxEventTypes[], listener: ListenerFunction<DragBoxEvent>): void;
    on(type: TDragZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TDragZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TDragZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TDragZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TDragZoomBaseEventTypes | TDragZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TDragZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TDragZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TDragZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TDragZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TDragZoomObjectEventTypes | TDragZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
