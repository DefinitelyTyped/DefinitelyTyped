import Collection from '../Collection';
import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import Event from '../events/Event';
import { Extent } from '../extent';
import Feature from '../Feature';
import { FeatureLoader, FeatureUrlFunction } from '../featureloader';
import FeatureFormat from '../format/Feature';
import { ObjectEvent } from '../Object';
import Projection from '../proj/Projection';
import Source, { AttributionLike } from './Source';

export type LoadingStrategy = (p0: Extent, p1: number) => Extent[];
export interface Options {
    attributions?: AttributionLike;
    features?: Feature[] | Collection<Feature>;
    format?: FeatureFormat;
    loader?: FeatureLoader;
    overlaps?: boolean;
    strategy?: LoadingStrategy;
    url?: string | FeatureUrlFunction;
    useSpatialIndex?: boolean;
    wrapX?: boolean;
}
export default class VectorSource extends Source {
    constructor(opt_options?: Options);
    protected addFeatureInternal(feature: Feature): void;
    protected addFeaturesInternal(features: Feature[]): void;
    protected removeFeatureInternal(feature: Feature): void;
    addFeature(feature: Feature): void;
    addFeatures(features: Feature[]): void;
    clear(opt_fast?: boolean): void;
    forEachFeature<T>(callback: (p0: Feature) => T): T | undefined;
    forEachFeatureAtCoordinateDirect<T>(coordinate: Coordinate, callback: (p0: Feature) => T): T | undefined;
    forEachFeatureInExtent<T>(extent: Extent, callback: (p0: Feature) => T): T | undefined;
    forEachFeatureIntersectingExtent<T>(extent: Extent, callback: (p0: Feature) => T): T | undefined;
    getClosestFeatureToCoordinate(coordinate: Coordinate, opt_filter?: () => void): Feature;
    getExtent(opt_extent?: Extent): Extent;
    getFeatureById(id: string | number): Feature;
    getFeatures(): Feature[];
    getFeaturesAtCoordinate(coordinate: Coordinate): Feature[];
    getFeaturesCollection(): Collection<Feature>;
    getFeaturesInExtent(extent: Extent): Feature[];
    getFormat(): FeatureFormat | undefined;
    getOverlaps(): boolean;
    getUrl(): string | FeatureUrlFunction | undefined;
    hasFeature(feature: Feature): boolean;
    isEmpty(): boolean;
    loadFeatures(extent: Extent, resolution: number, projection: Projection): void;
    removeFeature(feature: Feature): void;
    removeLoadedExtent(extent: Extent): void;
    setLoader(loader: FeatureLoader): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'addfeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'addfeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'addfeature', listener: (evt: VectorSourceEvent) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'changefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'changefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'changefeature', listener: (evt: VectorSourceEvent) => void): void;
    on(type: 'clear', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'clear', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'clear', listener: (evt: VectorSourceEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'removefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    once(type: 'removefeature', listener: (evt: VectorSourceEvent) => void): EventsKey;
    un(type: 'removefeature', listener: (evt: VectorSourceEvent) => void): void;
}
export class VectorSourceEvent extends Event {
    constructor();
    feature: Feature;
}
