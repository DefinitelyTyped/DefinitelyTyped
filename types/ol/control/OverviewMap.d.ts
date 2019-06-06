import Collection from 'ol/Collection';
import Control from 'ol/control/Control';
import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import Layer from 'ol/layer/Layer';
import MapEvent from 'ol/MapEvent';
import { ObjectEvent } from 'ol/Object';
import PluggableMap from 'ol/PluggableMap';
import View from 'ol/View';
export function render(mapEvent: MapEvent): void;
export interface Options {
    className?: string;
    collapsed?: boolean;
    collapseLabel?: string | HTMLElement;
    collapsible?: boolean;
    label?: string | HTMLElement;
    layers?: Layer[] | Collection<Layer>;
    render?: ((param0: MapEvent) => void);
    target?: HTMLElement | string;
    tipLabel?: string;
    view?: View;
}
export default class OverviewMap extends Control {
    constructor(opt_options?: Options);
    getCollapsed(): boolean;
    getCollapsible(): boolean;
    getOverviewMap(): PluggableMap;
    setCollapsed(collapsed: boolean): void;
    setCollapsible(collapsible: boolean): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
