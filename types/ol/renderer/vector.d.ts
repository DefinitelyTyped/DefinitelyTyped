import BaseEvent from '../events/Event';
import { FeatureLike } from '../Feature';
import SimpleGeometry from '../geom/SimpleGeometry';
import Layer from '../layer/Layer';
import { TransformFunction } from '../proj';
import BuilderGroup from '../render/canvas/BuilderGroup';
import Source from '../source/Source';
import Style from '../style/Style';

/**
 * Feature callback. The callback will be called with three arguments. The first
 * argument is one {@link module:ol/Feature feature} or {@link module:ol/render/Feature render feature}
 * at the pixel, the second is the {@link module:ol/layer/Layer layer} of the feature and will be null for
 * unmanaged layers. The third is the {@link module:ol/geom/SimpleGeometry} of the feature. For features
 * with a GeometryCollection geometry, it will be the first detected geometry from the collection.
 */
export type FeatureCallback<T> = (p0: FeatureLike, p1: Layer<Source>, p2: SimpleGeometry) => T;
export function defaultOrder(feature1: FeatureLike, feature2: FeatureLike): number;
export function getSquaredTolerance(resolution: number, pixelRatio: number): number;
export function getTolerance(resolution: number, pixelRatio: number): number;
export function renderFeature(
    replayGroup: BuilderGroup,
    feature: FeatureLike,
    style: Style,
    squaredTolerance: number,
    listener: (p0: BaseEvent) => void,
    opt_transform?: TransformFunction,
    opt_declutterBuilderGroup?: BuilderGroup,
): boolean;
