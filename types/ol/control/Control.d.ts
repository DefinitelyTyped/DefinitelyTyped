import MapEvent from '../MapEvent';
import BaseObject, { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';

export type TControlBaseEventTypes = 'change' | 'error';
export type TControlObjectEventTypes = 'propertychange';
export interface Options {
    element?: HTMLElement | undefined;
    render?: ((p0: MapEvent) => void) | undefined;
    target?: HTMLElement | string | undefined;
}
export default class Control extends BaseObject {
    constructor(options: Options);
    protected element: HTMLElement;
    protected listenerKeys: EventsKey[];
    /**
     * Clean up.
     */
    disposeInternal(): void;
    /**
     * Get the map associated with this control.
     */
    getMap(): PluggableMap | undefined;
    /**
     * Renders the control.
     */
    render(mapEvent: MapEvent): void;
    /**
     * Remove the control from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     */
    setMap(map?: PluggableMap): void;
    /**
     * This function is used to set a target element for the control. It has no
     * effect if it is called after the control has been added to the map (i.e.
     * after setMap is called on the control). If no target is set in the
     * options passed to the control constructor and if setTarget is not called
     * then the control is added to the map's overlay container.
     */
    setTarget(target: HTMLElement | string): void;
    on(type: TControlBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TControlBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TControlBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TControlBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TControlBaseEventTypes | TControlBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TControlObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TControlObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TControlObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TControlObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TControlObjectEventTypes | TControlObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
