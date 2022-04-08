import Layer from '../layer/Layer';
import { Pixel } from '../pixel';
import PluggableMap, { FrameState } from '../PluggableMap';
import EventType from '../render/EventType';
import Source from '../source/Source';
import MapRenderer from './Map';

export default class CompositeMapRenderer extends MapRenderer {
    constructor(map: PluggableMap);
    dispatchRenderEvent(type: EventType, frameState: FrameState): void;
    forEachLayerAtPixel<T>(
        pixel: Pixel,
        frameState: FrameState,
        hitTolerance: number,
        callback: (p0: Layer<Source>, p1: Uint8ClampedArray | Uint8Array) => T,
        layerFilter: (p0: Layer<Source>) => boolean,
    ): T | undefined;
    /**
     * Render.
     */
    renderFrame(frameState: FrameState): void;
}
