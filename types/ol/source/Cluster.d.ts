import Feature from '../Feature';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import Geometry from '../geom/Geometry';
import Point from '../geom/Point';
import Projection from '../proj/Projection';
import { AttributionLike } from './Source';
import VectorSource, { VectorSourceEvent } from './Vector';

export type TClusterVectorSourceEventTypes =
    | 'addfeature'
    | 'changefeature'
    | 'clear'
    | 'featuresloadend'
    | 'featuresloaderror'
    | 'featuresloadstart'
    | 'removefeature';
export type TClusterBaseEventTypes = 'change' | 'error';
export type TClusterObjectEventTypes = 'propertychange';
export interface Options {
    attributions?: AttributionLike | undefined;
    distance?: number | undefined;
    minDistance?: number | undefined;
    geometryFunction?: ((p0: Feature<Geometry>) => Point) | undefined;
    createCluster?: ((p0: Point, p1: Feature[]) => Feature<Geometry>) | undefined;
    source?: VectorSource<Geometry> | undefined;
    wrapX?: boolean | undefined;
}
export default class Cluster extends VectorSource {
    constructor(options: Options);
    protected distance: number;
    protected features: Feature<Geometry>[];
    protected geometryFunction: (feature: Feature<Geometry>) => Point;
    protected interpolationRatio: number;
    protected minDistance: number;
    protected resolution: number;
    protected source: VectorSource<Geometry>;
    protected cluster(): void;
    protected createCluster(features: Feature<Geometry>[], extent: Extent): Feature<Geometry>;
    /**
     * Remove all features from the source.
     */
    clear(opt_fast?: boolean): void;
    /**
     * Get the distance in pixels between clusters.
     */
    getDistance(): number;
    /**
     * The configured minimum distance between clusters.
     */
    getMinDistance(): number;
    getResolutions(): number[] | undefined;
    /**
     * Get a reference to the wrapped source.
     */
    getSource(): VectorSource<Geometry>;
    loadFeatures(extent: Extent, resolution: number, projection: Projection): void;
    /**
     * Handle the source changing.
     */
    refresh(): void;
    /**
     * Set the distance within which features will be clusterd together.
     */
    setDistance(distance: number): void;
    /**
     * Set the minimum distance between clusters. Will be capped at the
     * configured distance.
     */
    setMinDistance(minDistance: number): void;
    /**
     * Replace the wrapped source.
     */
    setSource(source: VectorSource<Geometry>): void;
    /**
     * Update the distances and refresh the source if necessary.
     */
    updateDistance(distance: number, minDistance: number): void;
    on(type: TClusterVectorSourceEventTypes, listener: ListenerFunction<VectorSourceEvent<Geometry>>): EventsKey;
    on(type: TClusterVectorSourceEventTypes[], listener: ListenerFunction<VectorSourceEvent<Geometry>>): EventsKey[];
    once(type: TClusterVectorSourceEventTypes, listener: ListenerFunction<VectorSourceEvent<Geometry>>): EventsKey;
    once(type: TClusterVectorSourceEventTypes[], listener: ListenerFunction<VectorSourceEvent<Geometry>>): EventsKey[];
    un(
        type: TClusterVectorSourceEventTypes | TClusterVectorSourceEventTypes[],
        listener: ListenerFunction<VectorSourceEvent<Geometry>>,
    ): void;
    on(type: TClusterBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TClusterBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TClusterBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TClusterBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TClusterBaseEventTypes | TClusterBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TClusterObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TClusterObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TClusterObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TClusterObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TClusterObjectEventTypes | TClusterObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
