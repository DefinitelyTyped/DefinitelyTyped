import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import MapEvent from '../MapEvent';
import BaseObject, { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';

export interface Options {
    element?: HTMLElement;
    render?: (p0: MapEvent) => void;
    target?: HTMLElement | string;
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
    getMap(): PluggableMap;
    /**
     * Renders the control.
     */
    render(mapEvent: MapEvent): void;
    /**
     * Remove the control from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     */
    setMap(map: PluggableMap): void;
    /**
     * This function is used to set a target element for the control. It has no
     * effect if it is called after the control has been added to the map (i.e.
     * after setMap is called on the control). If no target is set in the
     * options passed to the control constructor and if setTarget is not called
     * then the control is added to the map's overlay container.
     */
    setTarget(target: HTMLElement | string): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
