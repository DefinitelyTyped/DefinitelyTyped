import BaseObject, { ObjectEvent } from './Object';
import { EventsKey, ListenerFunction } from './events';
import BaseEvent from './events/Event';
import Geometry from './geom/Geometry';
import RenderFeature from './render/Feature';
import Style, { StyleFunction, StyleLike } from './style/Style';

export type TFeatureBaseEventTypes = 'change' | 'error';
export type TFeatureObjectEventTypes = 'change:geometry' | 'propertychange';
export type FeatureClass = typeof Feature | typeof RenderFeature;
export type FeatureLike = Feature<Geometry> | RenderFeature;
export default class Feature<G extends Geometry = Geometry> extends BaseObject {
    constructor(opt_geometryOrProperties?: G | ObjectWithGeometry<G>);
    /**
     * Clone this feature. If the original feature has a geometry it
     * is also cloned. The feature id is not set in the clone.
     */
    clone(): Feature<G>;
    /**
     * Get the feature's default geometry.  A feature may have any number of named
     * geometries.  The "default" geometry (the one that is rendered by default) is
     * set when calling {@link module:ol/Feature~Feature#setGeometry}.
     */
    getGeometry(): G | undefined;
    /**
     * Get the name of the feature's default geometry.  By default, the default
     * geometry is named geometry.
     */
    getGeometryName(): string;
    /**
     * Get the feature identifier.  This is a stable identifier for the feature and
     * is either set when reading data from a remote source or set explicitly by
     * calling {@link module:ol/Feature~Feature#setId}.
     */
    getId(): number | string | undefined;
    /**
     * Get the feature's style. Will return what was provided to the
     * {@link module:ol/Feature~Feature#setStyle} method.
     */
    getStyle(): StyleLike | undefined;
    /**
     * Get the feature's style function.
     */
    getStyleFunction(): StyleFunction | undefined;
    /**
     * Set the default geometry for the feature.  This will update the property
     * with the name returned by {@link module:ol/Feature~Feature#getGeometryName}.
     */
    setGeometry(geometry: G | undefined): void;
    /**
     * Set the property name to be used when getting the feature's default geometry.
     * When calling {@link module:ol/Feature~Feature#getGeometry}, the value of the property with
     * this name will be returned.
     */
    setGeometryName(name: string): void;
    /**
     * Set the feature id.  The feature id is considered stable and may be used when
     * requesting features or comparing identifiers returned from a remote source.
     * The feature id can be used with the
     * {@link module:ol/source/Vector~VectorSource#getFeatureById} method.
     */
    setId(id: number | string | undefined): void;
    /**
     * Set the style for the feature to override the layer style.  This can be a
     * single style object, an array of styles, or a function that takes a
     * resolution and returns an array of styles. To unset the feature style, call
     * setStyle() without arguments or a falsey value.
     */
    setStyle(opt_style?: StyleLike): void;
    on(type: TFeatureBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TFeatureBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TFeatureBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TFeatureBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TFeatureBaseEventTypes | TFeatureBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TFeatureObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TFeatureObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TFeatureObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TFeatureObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TFeatureObjectEventTypes | TFeatureObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
/**
 * Convert the provided object into a feature style function.  Functions passed
 * through unchanged.  Arrays of Style or single style objects wrapped
 * in a new feature style function.
 */
export function createStyleFunction(obj: StyleFunction | Style[] | Style): StyleFunction;
export type ObjectWithGeometry<G> = Record<string, any> & { geometry?: G };
