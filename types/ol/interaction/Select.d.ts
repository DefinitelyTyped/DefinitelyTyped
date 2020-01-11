import Collection from '../Collection';
import { EventsKey } from '../events';
import { Condition } from '../events/condition';
import BaseEvent from '../events/Event';
import Feature, { FeatureLike } from '../Feature';
import Geometry from '../geom/Geometry';
import Layer from '../layer/Layer';
import VectorLayer from '../layer/Vector';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import Source from '../source/Source';
import { StyleFunction, StyleLike } from '../style/Style';
import Interaction from './Interaction';

export type FilterFunction = (p0: FeatureLike, p1: Layer<Source>) => boolean;
export interface Options {
    addCondition?: Condition;
    condition?: Condition;
    layers?: Layer<Source>[] | ((p0: Layer<Source>) => boolean);
    style?: StyleLike;
    removeCondition?: Condition;
    toggleCondition?: Condition;
    multi?: boolean;
    features?: Collection<Feature<Geometry>>;
    filter?: FilterFunction;
    hitTolerance?: number;
}
export enum SelectEventType {
    SELECT = 'select',
}
export default class Select extends Interaction {
    constructor(opt_options?: Options);
    getFeatures(): Collection<Feature<Geometry>>;
    getHitTolerance(): number;
    getLayer(feature: FeatureLike): VectorLayer;
    setHitTolerance(hitTolerance: number): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
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
    on(type: 'select', listener: (evt: SelectEvent) => void): EventsKey;
    once(type: 'select', listener: (evt: SelectEvent) => void): EventsKey;
    un(type: 'select', listener: (evt: SelectEvent) => void): void;
}
export class SelectEvent extends BaseEvent {
    constructor(
        type: SelectEventType,
        selected: Feature<Geometry>[],
        deselected: Feature<Geometry>[],
        mapBrowserEvent: MapBrowserEvent,
    );
    deselected: Feature<Geometry>[];
    mapBrowserEvent: MapBrowserEvent;
    selected: Feature<Geometry>[];
}
