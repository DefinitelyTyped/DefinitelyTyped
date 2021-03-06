import Collection from '../Collection';
import { EventsKey } from '../events';
import Event from '../events/Event';
import Layer from '../layer/Layer';
import MapEvent from '../MapEvent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import View from '../View';
import Control from './Control';

export interface Options {
    className?: string | undefined;
    collapsed?: boolean | undefined;
    collapseLabel?: string | HTMLElement | undefined;
    collapsible?: boolean | undefined;
    label?: string | HTMLElement | undefined;
    layers?: Layer[] | Collection<Layer> | undefined;
    render?: ((p0: MapEvent) => void) | undefined;
    target?: HTMLElement | string | undefined;
    tipLabel?: string | undefined;
    view?: View | undefined;
}
export default class OverviewMap extends Control {
    constructor(opt_options?: Options);
    getCollapsed(): boolean;
    getCollapsible(): boolean;
    getOverviewMap(): PluggableMap;
    setCollapsed(collapsed: boolean): void;
    setCollapsible(collapsible: boolean): void;
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
export function render(mapEvent: MapEvent): void;
