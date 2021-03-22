import { EventsKey } from '../events';
import { Condition } from '../events/condition';
import BaseEvent from '../events/Event';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import Interaction from './Interaction';

export interface Options {
    condition?: Condition;
    onFocusOnly?: boolean;
    maxDelta?: number;
    duration?: number;
    timeout?: number;
    useAnchor?: boolean;
    constrainResolution?: boolean;
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
