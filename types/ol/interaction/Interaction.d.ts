import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import MapBrowserEvent from '../MapBrowserEvent';
import BaseObject, { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import View from '../View';

/**
 * Object literal with config options for interactions.
 */
export interface InteractionOptions {
    handleEvent: (p0: MapBrowserEvent<UIEvent>) => boolean;
}
export default class Interaction extends BaseObject {
    constructor(opt_options?: InteractionOptions);
    /**
     * Return whether the interaction is currently active.
     */
    getActive(): boolean;
    /**
     * Get the map associated with this interaction.
     */
    getMap(): PluggableMap;
    /**
     * Handles the {@link module:ol/MapBrowserEvent map browser event}.
     */
    handleEvent(mapBrowserEvent: MapBrowserEvent<UIEvent>): boolean;
    /**
     * Activate or deactivate the interaction.
     */
    setActive(active: boolean): void;
    /**
     * Remove the interaction from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     */
    setMap(map: PluggableMap): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export function pan(view: View, delta: Coordinate, opt_duration?: number): void;
export function zoomByDelta(view: View, delta: number, opt_anchor?: Coordinate, opt_duration?: number): void;
