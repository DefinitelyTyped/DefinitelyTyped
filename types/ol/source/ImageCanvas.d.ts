import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import ImageCanvas from '../ImageCanvas';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { Size } from '../size';
import ImageSource, { ImageSourceEvent } from './Image';
import { AttributionLike } from './Source';
import State from './State';

/**
 * A function returning the canvas element ({HTMLCanvasElement})
 * used by the source as an image. The arguments passed to the function are:
 * {@link module:ol/extent~Extent} the image extent, {number} the image resolution,
 * {number} the device pixel ratio, {@link module:ol/size~Size} the image size, and
 * {@link module:ol/proj/Projection} the image projection. The canvas returned by
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
    attributions?: AttributionLike;
    canvasFunction?: FunctionType;
    imageSmoothing?: boolean;
    projection?: ProjectionLike;
    ratio?: number;
    resolutions?: number[];
    state?: State;
}
export default class ImageCanvasSource extends ImageSource {
    constructor(opt_options?: Options);
    getImageInternal(extent: Extent, resolution: number, pixelRatio: number, projection: Projection): ImageCanvas;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'imageloadend', listener: (evt: ImageSourceEvent) => void): EventsKey;
    once(type: 'imageloadend', listener: (evt: ImageSourceEvent) => void): EventsKey;
    un(type: 'imageloadend', listener: (evt: ImageSourceEvent) => void): void;
    on(type: 'imageloaderror', listener: (evt: ImageSourceEvent) => void): EventsKey;
    once(type: 'imageloaderror', listener: (evt: ImageSourceEvent) => void): EventsKey;
    un(type: 'imageloaderror', listener: (evt: ImageSourceEvent) => void): void;
    on(type: 'imageloadstart', listener: (evt: ImageSourceEvent) => void): EventsKey;
    once(type: 'imageloadstart', listener: (evt: ImageSourceEvent) => void): EventsKey;
    un(type: 'imageloadstart', listener: (evt: ImageSourceEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
