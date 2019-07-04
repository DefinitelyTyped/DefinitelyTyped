import Collection from 'ol/Collection';
import { EventsKey } from 'ol/events';
import { Condition } from 'ol/events/condition';
import Event from 'ol/events/Event';
import Feature, { FeatureLike } from 'ol/Feature';
import Interaction from 'ol/interaction/Interaction';
import Layer from 'ol/layer/Layer';
import VectorLayer from 'ol/layer/Vector';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import { ObjectEvent } from 'ol/Object';
import { StyleFunction, StyleLike } from 'ol/style/Style';
export type FilterFunction = ((param0: FeatureLike, param1: Layer) => boolean);
export interface Options {
    addCondition?: Condition;
    condition?: Condition;
    layers?: Layer[] | ((param0: Layer) => boolean);
    style?: StyleLike;
    removeCondition?: Condition;
    toggleCondition?: Condition;
    multi?: boolean;
    features?: Collection<Feature>;
    filter?: FilterFunction;
    wrapX?: boolean;
    hitTolerance?: number;
}
export default class Select extends Interaction {
    constructor(opt_options?: Options);
    getFeatures(): Collection<Feature>;
    getHitTolerance(): number;
    getLayer(feature: FeatureLike): VectorLayer;
    getOverlay(): VectorLayer;
    setHitTolerance(hitTolerance: number): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'select', listener: (evt: SelectEvent) => void): EventsKey;
    once(type: 'select', listener: (evt: SelectEvent) => void): EventsKey;
    un(type: 'select', listener: (evt: SelectEvent) => void): void;
}
export class SelectEvent extends Event {
    constructor(type: SelectEventType, selected: Feature[], deselected: Feature[], mapBrowserEvent: MapBrowserEvent);
    deselected: Feature[];
    mapBrowserEvent: MapBrowserEvent;
    selected: Feature[];
}
export enum SelectEventType {
    SELECT = 'select',
}
