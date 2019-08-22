import { Coordinate } from '../coordinate';
import Disposable from '../Disposable';
import { FeatureLike } from '../Feature';
import BaseLayer from '../layer/Base';
import Layer, { State } from '../layer/Layer';
import { Pixel } from '../pixel';
import PluggableMap, { FrameState } from '../PluggableMap';
import EventType from '../render/EventType';
import LayerRenderer from './Layer';

export default class MapRenderer extends Disposable {
    constructor(map: PluggableMap);
    protected calculateMatrices2D(frameState: FrameState): void;
    protected getLayerRenderer(layer: BaseLayer): LayerRenderer;
    protected getLayerRendererByKey(layerKey: string): LayerRenderer;
    protected getLayerRenderers(): { [key: string]: LayerRenderer };
    protected scheduleExpireIconCache(frameState: FrameState): void;
    protected scheduleRemoveUnusedLayerRenderers(frameState: FrameState): void;
    dispatchRenderEvent(type: EventType, frameState: FrameState): void;
    forEachFeatureAtCoordinate<S, T, U>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: (this: S, p0: FeatureLike, p1: Layer) => T,
        thisArg: S,
        layerFilter: (this: U, p0: Layer) => boolean,
        thisArg2: U
    ): T | undefined;
    forEachLayerAtPixel<S, T, U>(
        pixel: Pixel,
        frameState: FrameState,
        hitTolerance: number,
        callback: (this: S, p0: Layer, p1: Uint8ClampedArray | Uint8Array) => T,
        thisArg: S,
        layerFilter: (this: U, p0: Layer) => boolean,
        thisArg2: U
    ): T | undefined;
    getMap(): PluggableMap;
    hasFeatureAtCoordinate<U>(coordinate: Coordinate, frameState: FrameState, hitTolerance: number, layerFilter: (this: U, p0: Layer) => boolean, thisArg: U): boolean;
    registerLayerRenderers(constructors: LayerRenderer[]): void;
    removeLayerRenderers(): void;
    renderFrame(frameState: FrameState): void;
}
export function sortByZIndex(state1: State, state2: State): number;
