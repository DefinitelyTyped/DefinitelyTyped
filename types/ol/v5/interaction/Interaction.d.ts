import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import Event from '../events/Event';
import MapBrowserEvent from '../MapBrowserEvent';
import BaseObject, { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import View from '../View';

export interface InteractionOptions {
    handleEvent: (p0: MapBrowserEvent) => boolean;
}
export default class Interaction extends BaseObject {
    constructor(options: InteractionOptions);
    getActive(): boolean;
    getMap(): PluggableMap;
    handleEvent(mapBrowserEvent: MapBrowserEvent): boolean;
    setActive(active: boolean): void;
    setMap(map: PluggableMap): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export function pan(view: View, delta: Coordinate, opt_duration?: number): void;
export function rotate(view: View, rotation: number | undefined, opt_anchor?: Coordinate, opt_duration?: number): void;
export function rotateWithoutConstraints(view: View, rotation: number | undefined, opt_anchor?: Coordinate, opt_duration?: number): void;
export function zoom(view: View, resolution: number | undefined, opt_anchor?: Coordinate, opt_duration?: number, opt_direction?: number): void;
export function zoomByDelta(view: View, delta: number, opt_anchor?: Coordinate, opt_duration?: number): void;
export function zoomWithoutConstraints(view: View, resolution: number | undefined, opt_anchor?: Coordinate, opt_duration?: number): void;
