import { EventsKey } from '../events';
import Event from '../events/Event';
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
    getMap(): PluggableMap;
    setMap(map: PluggableMap): void;
    setTarget(target: HTMLElement | string): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
