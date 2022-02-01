import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Condition } from '../events/condition';
import Interaction from './Interaction';

export type TMouseWheelZoomBaseEventTypes = 'change' | 'error';
export type TMouseWheelZoomObjectEventTypes = 'change:active' | 'propertychange';
export interface Options {
    condition?: Condition | undefined;
    onFocusOnly?: boolean | undefined;
    maxDelta?: number | undefined;
    duration?: number | undefined;
    timeout?: number | undefined;
    useAnchor?: boolean | undefined;
    constrainResolution?: boolean | undefined;
}
export enum Mode {
    TRACKPAD = 'trackpad',
    WHEEL = 'wheel',
}
export default class MouseWheelZoom extends Interaction {
    constructor(opt_options?: Options);
    /**
     * Handles the {@link module:ol/MapBrowserEvent map browser event} (if it was a mousewheel-event) and eventually
     * zooms the map.
     */
    handleEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Enable or disable using the mouse's location as an anchor when zooming
     */
    setMouseAnchor(useAnchor: boolean): void;
    on(type: TMouseWheelZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TMouseWheelZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TMouseWheelZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TMouseWheelZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TMouseWheelZoomBaseEventTypes | TMouseWheelZoomBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TMouseWheelZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TMouseWheelZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TMouseWheelZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TMouseWheelZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TMouseWheelZoomObjectEventTypes | TMouseWheelZoomObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
