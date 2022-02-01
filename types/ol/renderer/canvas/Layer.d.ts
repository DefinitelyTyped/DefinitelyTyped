import { FrameState } from '../../PluggableMap';
import { Coordinate } from '../../coordinate';
import { EventsKey, ListenerFunction } from '../../events';
import BaseEvent from '../../events/Event';
import { Extent } from '../../extent';
import Layer from '../../layer/Layer';
import { Pixel } from '../../pixel';
import { Transform } from '../../transform';
import LayerRenderer from '../Layer';
import { HitMatch } from '../Map';
import { FeatureCallback } from '../vector';

export type TCanvasLayerRendererBaseEventTypes = 'change' | 'error';
export default abstract class CanvasLayerRenderer<LayerType extends Layer = Layer> extends LayerRenderer {
    constructor(layer: LayerType);
    protected container: HTMLElement;
    /**
     * The transform for viewport CSS pixels to rendered pixels.  This transform must
     * be set when rendering a frame and may be used by other functions after rendering.
     */
    protected inversePixelTransform: Transform;
    /**
     * The transform for rendered pixels to viewport CSS pixels.  This transform must
     * be set when rendering a frame and may be used by other functions after rendering.
     */
    protected pixelTransform: Transform;
    protected renderedResolution: number;
    /**
     * A temporary transform.  The values in this transform should only be used in a
     * function that sets the values.
     */
    protected tempTransform: Transform;
    protected clipUnrotated(context: CanvasRenderingContext2D, frameState: FrameState, extent: Extent): void;
    /**
     * Creates a transform for rendering to an element that will be rotated after rendering.
     */
    protected getRenderTransform(
        center: Coordinate,
        resolution: number,
        rotation: number,
        pixelRatio: number,
        width: number,
        height: number,
        offsetX: number,
    ): Transform;
    protected postRender(context: CanvasRenderingContext2D, frameState: FrameState): void;
    protected preRender(context: CanvasRenderingContext2D, frameState: FrameState): void;
    abstract forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: FeatureCallback<T>,
        matches: HitMatch<T>[],
    ): T | undefined;
    getBackground(frameState: FrameState): string;
    getDataAtPixel(pixel: Pixel, frameState: FrameState, hitTolerance: number): Uint8ClampedArray | Uint8Array;
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     */
    abstract handleFontsChanged(): void;
    /**
     * Determine whether render should be called.
     */
    abstract prepareFrame(frameState: FrameState): boolean;
    /**
     * Render the layer.
     */
    abstract renderFrame(frameState: FrameState, target: HTMLElement): HTMLElement;
    /**
     * Get a rendering container from an existing target, if compatible.
     */
    useContainer(target: HTMLElement, transform: string, opacity: number, opt_backgroundColor?: string): void;
    on(type: TCanvasLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TCanvasLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TCanvasLayerRendererBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TCanvasLayerRendererBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TCanvasLayerRendererBaseEventTypes | TCanvasLayerRendererBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
}
