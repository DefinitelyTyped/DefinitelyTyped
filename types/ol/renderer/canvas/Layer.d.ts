import { Coordinate } from '../../coordinate';
import { EventsKey } from '../../events';
import BaseEvent from '../../events/Event';
import { Extent } from '../../extent';
import { FeatureLike } from '../../Feature';
import Layer from '../../layer/Layer';
import { Pixel } from '../../pixel';
import { FrameState } from '../../PluggableMap';
import Source from '../../source/Source';
import { Transform } from '../../transform';
import LayerRenderer from '../Layer';

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
    protected clip(context: CanvasRenderingContext2D, frameState: FrameState, extent: Extent): void;
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
        callback: (p0: FeatureLike, p1: Layer<Source>) => T,
        declutteredFeatures: FeatureLike[],
    ): T;
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
    useContainer(target: HTMLElement, transform: string, opacity: number): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
}
