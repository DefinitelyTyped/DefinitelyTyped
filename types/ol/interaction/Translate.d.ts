import Collection from '../Collection';
import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import Feature, { FeatureLike } from '../Feature';
import Geometry from '../geom/Geometry';
import Layer from '../layer/Layer';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import PluggableMap from '../PluggableMap';
import Source from '../source/Source';
import PointerInteraction from './Pointer';

export type FilterFunction = (p0: FeatureLike, p1: Layer<Source>) => boolean;
export interface Options {
    features?: Collection<Feature<Geometry>>;
    layers?: Layer<Source>[] | ((p0: Layer<Source>) => boolean);
    filter?: FilterFunction;
    hitTolerance?: number;
}
export default class Translate extends PointerInteraction {
    constructor(opt_options?: Options);
    getHitTolerance(): number;
    handleDownEvent(event: MapBrowserEvent<UIEvent>): boolean;
    handleDragEvent(event: MapBrowserEvent<UIEvent>): void;
    handleMoveEvent(event: MapBrowserEvent<UIEvent>): void;
    handleUpEvent(event: MapBrowserEvent<UIEvent>): boolean;
    setHitTolerance(hitTolerance: number): void;
    setMap(map: PluggableMap): void;
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
    on(type: 'translateend', listener: (evt: TranslateEvent) => void): EventsKey;
    once(type: 'translateend', listener: (evt: TranslateEvent) => void): EventsKey;
    un(type: 'translateend', listener: (evt: TranslateEvent) => void): void;
    on(type: 'translatestart', listener: (evt: TranslateEvent) => void): EventsKey;
    once(type: 'translatestart', listener: (evt: TranslateEvent) => void): EventsKey;
    un(type: 'translatestart', listener: (evt: TranslateEvent) => void): void;
    on(type: 'translating', listener: (evt: TranslateEvent) => void): EventsKey;
    once(type: 'translating', listener: (evt: TranslateEvent) => void): EventsKey;
    un(type: 'translating', listener: (evt: TranslateEvent) => void): void;
}
export class TranslateEvent extends BaseEvent {
    constructor();
    features: Collection<Feature<Geometry>>;
    mapBrowserEvent: MapBrowserEvent<UIEvent>;
    coordinate: Coordinate;
    startCoordinate: Coordinate;
}
