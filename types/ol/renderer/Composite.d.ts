import Layer from '../layer/Layer';
import { Pixel } from '../pixel';
import PluggableMap, { FrameState } from '../PluggableMap';
import EventType from '../render/EventType';
import Source from '../source/Source';
import MapRenderer from './Map';

export default class CompositeMapRenderer extends MapRenderer {
    constructor(map: PluggableMap);
    dispatchRenderEvent(type: EventType, frameState: FrameState): void;
    forEachLayerAtPixel<S, T, U>(
        pixel: Pixel,
        frameState: FrameState,
        hitTolerance: number,
        callback: (this: S, p0: Layer<Source>, p1: Uint8ClampedArray | Uint8Array) => T,
        layerFilter: (this: U, p0: Layer<Source>) => boolean,
    ): T;
}
