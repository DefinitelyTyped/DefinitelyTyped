import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import Interaction from './Interaction';

export type TDoubleClickZoomBaseEventTypes = 'change' | 'error';
export type TDoubleClickZoomObjectEventTypes = 'change:active' | 'propertychange';
export interface Options {
    duration?: number | undefined;
    delta?: number | undefined;
}
export default class DoubleClickZoom extends Interaction {
    constructor(opt_options?: Options);
    /**
     * Handles the {@link module:ol/MapBrowserEvent map browser event} (if it was a
     * doubleclick) and eventually zooms the map.
     */
    handleEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    on(type: TDoubleClickZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TDoubleClickZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TDoubleClickZoomBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TDoubleClickZoomBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TDoubleClickZoomBaseEventTypes | TDoubleClickZoomBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TDoubleClickZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TDoubleClickZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TDoubleClickZoomObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TDoubleClickZoomObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TDoubleClickZoomObjectEventTypes | TDoubleClickZoomObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
