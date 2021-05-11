import { Coordinate } from '../coordinate';
import Disposable from '../Disposable';
import { FeatureLike } from '../Feature';
import SimpleGeometry from '../geom/SimpleGeometry';
import Layer from '../layer/Layer';
import { Pixel } from '../pixel';
import PluggableMap, { FrameState } from '../PluggableMap';
import EventType from '../render/EventType';
import Source from '../source/Source';
import { FeatureCallback } from './vector';

export interface HitMatch<T> {
    feature: FeatureLike;
    layer: Layer<Source>;
    geometry: SimpleGeometry;
    distanceSq: number;
    callback: FeatureCallback<T>;
}
export default abstract class MapRenderer extends Disposable {
    constructor(map: PluggableMap);
    protected calculateMatrices2D(frameState: FrameState): void;
    protected scheduleExpireIconCache(frameState: FrameState): void;
    abstract dispatchRenderEvent(type: EventType, frameState: FrameState): void;
    forEachFeatureAtCoordinate<S, T, U>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        checkWrapped: boolean,
        callback: FeatureCallback<T>,
        thisArg: S,
        layerFilter: (this: U, p0: Layer<Source>) => boolean,
        thisArg2: U,
    ): T | undefined;
    abstract forEachLayerAtPixel<T>(
        pixel: Pixel,
        frameState: FrameState,
        hitTolerance: number,
        callback: (p0: Layer<Source>, p1: Uint8ClampedArray | Uint8Array) => T,
        layerFilter: (p0: Layer<Source>) => boolean,
    ): T | undefined;
    getMap(): PluggableMap;
    hasFeatureAtCoordinate<U>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        checkWrapped: boolean,
        layerFilter: (this: U, p0: Layer<Source>) => boolean,
        thisArg: U,
    ): boolean;
    /**
     * Render.
     */
    abstract renderFrame(frameState: FrameState): void;
}
