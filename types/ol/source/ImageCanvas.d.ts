import ImageCanvas from '../ImageCanvas';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { Size } from '../size';
import ImageSource, { ImageSourceEvent } from './Image';
import { AttributionLike } from './Source';
import State from './State';

export type TImageCanvasSourceBaseEventTypes = 'change' | 'error';
export type TImageCanvasSourceImageSourceEventTypes = 'imageloadend' | 'imageloaderror' | 'imageloadstart';
export type TImageCanvasSourceObjectEventTypes = 'propertychange';
/**
 * A function returning the canvas element ({HTMLCanvasElement})
 * used by the source as an image. The arguments passed to the function are:
 * {@link module:ol/extent~Extent} the image extent, {number} the image resolution,
 * {number} the pixel ratio of the map, {@link module:ol/size~Size} the image size,
 * and {@link module:ol/proj/Projection} the image projection. The canvas returned by
 * this function is cached by the source. The this keyword inside the function
 * references the {@link module:ol/source/ImageCanvas}.
 */
export type FunctionType = (
    this: ImageCanvas,
    p0: Extent,
    p1: number,
    p2: number,
    p3: Size,
    p4: Projection,
) => HTMLCanvasElement | null | undefined;
export interface Options {
    attributions?: AttributionLike | undefined;
    canvasFunction?: FunctionType | undefined;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    projection?: ProjectionLike | undefined;
    ratio?: number | undefined;
    resolutions?: number[] | undefined;
    state?: State | undefined;
}
export default class ImageCanvasSource extends ImageSource {
    constructor(opt_options?: Options);
    getImageInternal(extent: Extent, resolution: number, pixelRatio: number, projection: Projection): ImageCanvas;
    on(type: TImageCanvasSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TImageCanvasSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TImageCanvasSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TImageCanvasSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TImageCanvasSourceBaseEventTypes | TImageCanvasSourceBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TImageCanvasSourceImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    on(type: TImageCanvasSourceImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    once(type: TImageCanvasSourceImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    once(type: TImageCanvasSourceImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    un(
        type: TImageCanvasSourceImageSourceEventTypes | TImageCanvasSourceImageSourceEventTypes[],
        listener: ListenerFunction<ImageSourceEvent>,
    ): void;
    on(type: TImageCanvasSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TImageCanvasSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TImageCanvasSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TImageCanvasSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TImageCanvasSourceObjectEventTypes | TImageCanvasSourceObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
