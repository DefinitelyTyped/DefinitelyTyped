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
    protected context: CanvasRenderingContext2D;
    protected inversePixelTransform: Transform;
    protected pixelTransform: Transform;
    protected renderedResolution: number;
    protected clip(context: CanvasRenderingContext2D, frameState: FrameState, extent: Extent): void;
    protected clipUnrotated(context: CanvasRenderingContext2D, frameState: FrameState, extent: Extent): void;
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
    createTransformString(transform: Transform): string;
    abstract forEachFeatureAtCoordinate<T>(
        coordinate: Coordinate,
        frameState: FrameState,
        hitTolerance: number,
        callback: (p0: FeatureLike, p1: Layer<Source>) => T,
        declutteredFeatures: FeatureLike[],
    ): T | void;
    getDataAtPixel(pixel: Pixel, frameState: FrameState, hitTolerance: number): Uint8ClampedArray | Uint8Array;
    abstract handleFontsChanged(): void;
    abstract prepareFrame(frameState: FrameState): boolean;
    abstract renderFrame(frameState: FrameState, target: HTMLElement): HTMLElement;
    useContainer(target: HTMLElement, transform: string, opacity: number): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
}
