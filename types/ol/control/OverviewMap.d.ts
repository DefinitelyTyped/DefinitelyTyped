import Collection from '../Collection';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import Layer from '../layer/Layer';
import MapEvent from '../MapEvent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
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
    /**
     * Determine if the overview map is collapsed.
     */
    getCollapsed(): boolean;
    /**
     * Return true if the overview map is collapsible, false otherwise.
     */
    getCollapsible(): boolean;
    /**
     * Return the overview map.
     */
    getOverviewMap(): PluggableMap;
    /**
     * Return true if the overview map view can rotate, false otherwise.
     */
    getRotateWithView(): boolean;
    /**
     * Collapse or expand the overview map according to the passed parameter. Will
     * not do anything if the overview map isn't collapsible or if the current
     * collapsed state is already the one requested.
     */
    setCollapsed(collapsed: boolean): void;
    /**
     * Set whether the overview map should be collapsible.
     */
    setCollapsible(collapsible: boolean): void;
    /**
     * Remove the control from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     */
    setMap(map: PluggableMap): void;
    /**
     * Set whether the overview map view should rotate with the main map view.
     */
    setRotateWithView(rotateWithView: boolean): void;
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
