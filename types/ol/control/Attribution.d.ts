import MapEvent from '../MapEvent';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import Control from './Control';

export type TAttributionBaseEventTypes = 'change' | 'error';
export type TAttributionObjectEventTypes = 'propertychange';
export interface Options {
    className?: string | undefined;
    target?: HTMLElement | string | undefined;
    collapsible?: boolean | undefined;
    collapsed?: boolean | undefined;
    tipLabel?: string | undefined;
    label?: string | HTMLElement | undefined;
    expandClassName?: string | undefined;
    collapseLabel?: string | HTMLElement | undefined;
    collapseClassName?: string | undefined;
    render?: ((p0: MapEvent) => void) | undefined;
}
export default class Attribution extends Control {
    constructor(opt_options?: Options);
    /**
     * Return true when the attribution is currently collapsed or false
     * otherwise.
     */
    getCollapsed(): boolean;
    /**
     * Return true if the attribution is collapsible, false otherwise.
     */
    getCollapsible(): boolean;
    /**
     * Collapse or expand the attribution according to the passed parameter. Will
     * not do anything if the attribution isn't collapsible or if the current
     * collapsed state is already the one requested.
     */
    setCollapsed(collapsed: boolean): void;
    /**
     * Set whether the attribution should be collapsible.
     */
    setCollapsible(collapsible: boolean): void;
    on(type: TAttributionBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TAttributionBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TAttributionBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TAttributionBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TAttributionBaseEventTypes | TAttributionBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TAttributionObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TAttributionObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TAttributionObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TAttributionObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TAttributionObjectEventTypes | TAttributionObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
