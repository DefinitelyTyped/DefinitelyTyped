import Collection from '../Collection';
import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import Feature from '../Feature';
import { FeatureLoader, FeatureUrlFunction } from '../featureloader';
import FeatureFormat from '../format/Feature';
import Geometry from '../geom/Geometry';
import { ObjectEvent } from '../Object';
import Projection from '../proj/Projection';
import Source, { AttributionLike } from './Source';

/**
 * A function that takes an {@link module:ol/extent~Extent} and a resolution as arguments, and
 * returns an array of {@link module:ol/extent~Extent} with the extents to load. Usually this
 * is one of the standard {@link module:ol/loadingstrategy} strategies.
 */
export type LoadingStrategy = (p0: Extent, p1: number) => Extent[];
export interface Options {
    attributions?: AttributionLike;
    features?: Feature<Geometry>[] | Collection<Feature<Geometry>>;
    format?: FeatureFormat;
    loader?: FeatureLoader;
    overlaps?: boolean;
    strategy?: LoadingStrategy;
    url?: string | FeatureUrlFunction;
    useSpatialIndex?: boolean;
    wrapX?: boolean;
}
export default class VectorSource<GeomType extends Geometry = Geometry> extends Source {
    constructor(opt_options?: Options);
    /**
     * Add a feature without firing a change event.
     */
    protected addFeatureInternal(feature: Feature<GeomType>): void;
    /**
     * Add features without firing a change event.
     */
    protected addFeaturesInternal(features: Feature<GeomType>[]): void;
    /**
     * Remove feature without firing a change event.
     */
    protected removeFeatureInternal(feature: Feature<GeomType>): void;
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
    addFeature(feature: Feature<GeomType>): void;
    /**
     * Add a batch of features to the source.
     */
    addFeatures(features: Feature<GeomType>[]): void;
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
    forEachFeature<T>(callback: (p0: Feature<GeomType>) => T): T | undefined;
    /**
     * Iterate through all features whose geometries contain the provided
     * coordinate, calling the callback with each feature.  If the callback returns
     * a "truthy" value, iteration will stop and the function will return the same
     * value.
     */
    forEachFeatureAtCoordinateDirect<T>(coordinate: Coordinate, callback: (p0: Feature<GeomType>) => T): T | undefined;
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
    forEachFeatureInExtent<T>(extent: Extent, callback: (p0: Feature<GeomType>) => T): T | undefined;
    /**
     * Iterate through all features whose geometry intersects the provided extent,
     * calling the callback with each feature.  If the callback returns a "truthy"
     * value, iteration will stop and the function will return the same value.
     * If you only want to test for bounding box intersection, call the
     * {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent #forEachFeatureInExtent()} method instead.
     */
    forEachFeatureIntersectingExtent<T>(extent: Extent, callback: (p0: Feature<GeomType>) => T): T | undefined;
    /**
     * Get the closest feature to the provided coordinate.
     * This method is not available when the source is configured with
     * useSpatialIndex set to false.
     */
    getClosestFeatureToCoordinate(coordinate: Coordinate, opt_filter?: () => void): Feature<GeomType>;
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
    getFeatureById(id: string | number): Feature<GeomType>;
    /**
     * Get a feature by its internal unique identifier (using getUid).
     */
    getFeatureByUid(uid: string): Feature<GeomType>;
    /**
     * Get all features on the source in random order.
     */
    getFeatures(): Feature<GeomType>[];
    /**
     * Get all features whose geometry intersects the provided coordinate.
     */
    getFeaturesAtCoordinate(coordinate: Coordinate): Feature<GeomType>[];
    /**
     * Get the features collection associated with this source. Will be null
     * unless the source was configured with useSpatialIndex set to false, or
     * with an {@link module:ol/Collection} as features.
     */
    getFeaturesCollection(): Collection<Feature<GeomType>>;
    /**
     * Get all features whose bounding box intersects the provided extent.  Note that this returns an array of
     * all features intersecting the given extent in random order (so it may include
     * features whose geometries do not intersect the extent).
     * When useSpatialIndex is set to false, this method will return all
     * features.
     */
    getFeaturesInExtent(extent: Extent): Feature<GeomType>[];
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
    hasFeature(feature: Feature<GeomType>): boolean;
    isEmpty(): boolean;
    loadFeatures(extent: Extent, resolution: number, projection: Projection): void;
    /**
     * Remove a single feature from the source.  If you want to remove all features
     * at once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method
     * instead.
     */
    removeFeature(feature: Feature<GeomType>): void;
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
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'addfeature', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    once(type: 'addfeature', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    un(type: 'addfeature', listener: (evt: VectorSourceEvent<Geometry>) => void): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'changefeature', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    once(type: 'changefeature', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    un(type: 'changefeature', listener: (evt: VectorSourceEvent<Geometry>) => void): void;
    on(type: 'clear', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    once(type: 'clear', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    un(type: 'clear', listener: (evt: VectorSourceEvent<Geometry>) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'removefeature', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    once(type: 'removefeature', listener: (evt: VectorSourceEvent<Geometry>) => void): EventsKey;
    un(type: 'removefeature', listener: (evt: VectorSourceEvent<Geometry>) => void): void;
}
export class VectorSourceEvent<GeomType extends Geometry = Geometry> extends BaseEvent {
    constructor(type: string, opt_feature?: Feature<GeomType>);
    /**
     * The feature being added or removed.
     */
    feature: Feature<GeomType>;
}
