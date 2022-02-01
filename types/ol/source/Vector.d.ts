import Collection from '../Collection';
import Feature from '../Feature';
import { ObjectEvent } from '../Object';
import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { FeatureLoader, FeatureUrlFunction } from '../featureloader';
import FeatureFormat from '../format/Feature';
import Geometry from '../geom/Geometry';
import Projection from '../proj/Projection';
import Source, { AttributionLike } from './Source';

export type TVectorSourceVectorSourceEventTypes =
    | 'addfeature'
    | 'changefeature'
    | 'clear'
    | 'featuresloadend'
    | 'featuresloaderror'
    | 'featuresloadstart'
    | 'removefeature';
export type TVectorSourceBaseEventTypes = 'change' | 'error';
export type TVectorSourceObjectEventTypes = 'propertychange';
/**
 * A function that takes an {@link module:ol/extent~Extent} and a resolution as arguments, and
 * returns an array of {@link module:ol/extent~Extent} with the extents to load. Usually this
 * is one of the standard {@link module:ol/loadingstrategy} strategies.
 */
export type LoadingStrategy = (p0: Extent, p1: number, p2: Projection) => Extent[];
export interface Options {
    attributions?: AttributionLike | undefined;
    features?: Feature<Geometry>[] | Collection<Feature<Geometry>> | undefined;
    format?: FeatureFormat | undefined;
    loader?: FeatureLoader | undefined;
    overlaps?: boolean | undefined;
    strategy?: LoadingStrategy | undefined;
    url?: string | FeatureUrlFunction | undefined;
    useSpatialIndex?: boolean | undefined;
    wrapX?: boolean | undefined;
}
export default class VectorSource<G extends Geometry = Geometry> extends Source {
    constructor(opt_options?: Options);
    /**
     * Add a feature without firing a change event.
     */
    protected addFeatureInternal(feature: Feature<G>): void;
    /**
     * Add features without firing a change event.
     */
    protected addFeaturesInternal(features: Feature<G>[]): void;
    /**
     * Remove feature without firing a change event.
     */
    protected removeFeatureInternal(feature: Feature<G>): Feature<G> | undefined;
    /**
     * Add a single feature to the source.  If you want to add a batch of features
     * at once, call {@link module:ol/source/Vector~VectorSource#addFeatures #addFeatures()}
     * instead. A feature will not be added to the source if feature with
     * the same id is already there. The reason for this behavior is to avoid
     * feature duplication when using bbox or tile loading strategies.
     * Note: this also applies if an {@link module:ol/Collection} is used for features,
     * meaning that if a feature with a duplicate id is added in the collection, it will
     * be removed from it right away.
     */
    addFeature(feature: Feature<G>): void;
    /**
     * Add a batch of features to the source.
     */
    addFeatures(features: Feature<G>[]): void;
    /**
     * Remove all features from the source.
     */
    clear(opt_fast?: boolean): void;
    /**
     * Iterate through all features on the source, calling the provided callback
     * with each one.  If the callback returns any "truthy" value, iteration will
     * stop and the function will return the same value.
     * Note: this function only iterate through the feature that have a defined geometry.
     */
    forEachFeature<T>(callback: (p0: Feature<G>) => T): T | undefined;
    /**
     * Iterate through all features whose geometries contain the provided
     * coordinate, calling the callback with each feature.  If the callback returns
     * a "truthy" value, iteration will stop and the function will return the same
     * value.
     */
    forEachFeatureAtCoordinateDirect<T>(coordinate: Coordinate, callback: (p0: Feature<G>) => T): T | undefined;
    /**
     * Iterate through all features whose bounding box intersects the provided
     * extent (note that the feature's geometry may not intersect the extent),
     * calling the callback with each feature.  If the callback returns a "truthy"
     * value, iteration will stop and the function will return the same value.
     * If you are interested in features whose geometry intersects an extent, call
     * the {@link module:ol/source/Vector~VectorSource#forEachFeatureIntersectingExtent #forEachFeatureIntersectingExtent()} method instead.
     * When useSpatialIndex is set to false, this method will loop through all
     * features, equivalent to {@link module:ol/source/Vector~VectorSource#forEachFeature #forEachFeature()}.
     */
    forEachFeatureInExtent<T>(extent: Extent, callback: (p0: Feature<G>) => T): T | undefined;
    /**
     * Iterate through all features whose geometry intersects the provided extent,
     * calling the callback with each feature.  If the callback returns a "truthy"
     * value, iteration will stop and the function will return the same value.
     * If you only want to test for bounding box intersection, call the
     * {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent #forEachFeatureInExtent()} method instead.
     */
    forEachFeatureIntersectingExtent<T>(extent: Extent, callback: (p0: Feature<G>) => T): T | undefined;
    /**
     * Get the closest feature to the provided coordinate.
     * This method is not available when the source is configured with
     * useSpatialIndex set to false.
     */
    getClosestFeatureToCoordinate(coordinate: Coordinate, opt_filter?: (p0: Feature<G>) => boolean): Feature<G>;
    /**
     * Get the extent of the features currently in the source.
     * This method is not available when the source is configured with
     * useSpatialIndex set to false.
     */
    getExtent(opt_extent?: Extent): Extent;
    /**
     * Get a feature by its identifier (the value returned by feature.getId()).
     * Note that the index treats string and numeric identifiers as the same.  So
     * source.getFeatureById(2) will return a feature with id '2' or 2.
     */
    getFeatureById(id: string | number): Feature<G>;
    /**
     * Get a feature by its internal unique identifier (using getUid).
     */
    getFeatureByUid(uid: string): Feature<G>;
    /**
     * Get a snapshot of the features currently on the source in random order. The returned array
     * is a copy, the features are references to the features in the source.
     */
    getFeatures(): Feature<G>[];
    /**
     * Get all features whose geometry intersects the provided coordinate.
     */
    getFeaturesAtCoordinate(coordinate: Coordinate): Feature<G>[];
    /**
     * Get the features collection associated with this source. Will be null
     * unless the source was configured with useSpatialIndex set to false, or
     * with an {@link module:ol/Collection} as features.
     */
    getFeaturesCollection(): Collection<Feature<G>>;
    /**
     * Get all features whose bounding box intersects the provided extent.  Note that this returns an array of
     * all features intersecting the given extent in random order (so it may include
     * features whose geometries do not intersect the extent).
     * When useSpatialIndex is set to false, this method will return all
     * features.
     */
    getFeaturesInExtent(extent: Extent): Feature<G>[];
    /**
     * Get the format associated with this source.
     */
    getFormat(): FeatureFormat | undefined;
    getOverlaps(): boolean;
    getResolutions(): number[] | undefined;
    /**
     * Get the url associated with this source.
     */
    getUrl(): string | FeatureUrlFunction | undefined;
    /**
     * Returns true if the feature is contained within the source.
     */
    hasFeature(feature: Feature<G>): boolean;
    isEmpty(): boolean;
    loadFeatures(extent: Extent, resolution: number, projection: Projection): void;
    /**
     * Remove a single feature from the source.  If you want to remove all features
     * at once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method
     * instead.
     */
    removeFeature(feature: Feature<G>): void;
    /**
     * Remove an extent from the list of loaded extents.
     */
    removeLoadedExtent(extent: Extent): void;
    /**
     * Set the new loader of the source. The next render cycle will use the
     * new loader.
     */
    setLoader(loader: FeatureLoader): void;
    /**
     * Points the source to a new url. The next render cycle will use the new url.
     */
    setUrl(url: string | FeatureUrlFunction): void;
    on(type: TVectorSourceVectorSourceEventTypes, listener: ListenerFunction<VectorSourceEvent<Geometry>>): EventsKey;
    on(
        type: TVectorSourceVectorSourceEventTypes[],
        listener: ListenerFunction<VectorSourceEvent<Geometry>>,
    ): EventsKey[];
    once(type: TVectorSourceVectorSourceEventTypes, listener: ListenerFunction<VectorSourceEvent<Geometry>>): EventsKey;
    once(
        type: TVectorSourceVectorSourceEventTypes[],
        listener: ListenerFunction<VectorSourceEvent<Geometry>>,
    ): EventsKey[];
    un(
        type: TVectorSourceVectorSourceEventTypes | TVectorSourceVectorSourceEventTypes[],
        listener: ListenerFunction<VectorSourceEvent<Geometry>>,
    ): void;
    on(type: TVectorSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TVectorSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TVectorSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TVectorSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TVectorSourceBaseEventTypes | TVectorSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TVectorSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TVectorSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TVectorSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TVectorSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TVectorSourceObjectEventTypes | TVectorSourceObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
export class VectorSourceEvent<G extends Geometry = Geometry> extends BaseEvent {
    constructor(type: string, opt_feature?: Feature<G>, opt_features?: Feature<G>[]);
    /**
     * The added or removed feature for the ADDFEATURE and REMOVEFEATURE events, undefined otherwise.
     */
    feature: Feature<G>;
    /**
     * The loaded features for the FEATURESLOADED event, undefined otherwise.
     */
    features: Feature<G>[];
}
