import Collection from '../Collection';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import Layer from '../layer/Layer';
import MapBrowserEvent from '../MapBrowserEvent';
import MapEvent from '../MapEvent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import RenderEvent from '../render/Event';
import MapRenderer from '../renderer/Map';
import Source from '../source/Source';
import View from '../View';
import Control from './Control';

export interface Options {
    className?: string;
    collapsed?: boolean;
    collapseLabel?: string | HTMLElement;
    collapsible?: boolean;
    label?: string | HTMLElement;
    layers?: Layer<Source>[] | Collection<Layer<Source>>;
    render?: (p0: MapEvent) => void;
    rotateWithView?: boolean;
    target?: HTMLElement | string;
    tipLabel?: string;
    view?: View;
}
export default class OverviewMap extends Control {
    constructor(opt_options?: Options);
    getCollapsed(): boolean;
    getCollapsible(): boolean;
    getOverviewMap(): PluggableMap;
    getRotateWithView(): boolean;
    setCollapsed(collapsed: boolean): void;
    setCollapsible(collapsible: boolean): void;
    setRotateWithView(rotateWithView: boolean): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
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
export function render(mapEvent: MapEvent): void;
