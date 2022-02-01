import ImageWrapper from '../Image';
import ImageBase from '../ImageBase';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import Source, { AttributionLike } from './Source';
import State from './State';

export type TImageSourceBaseEventTypes = 'change' | 'error';
export type TImageSourceImageSourceEventTypes = 'imageloadend' | 'imageloaderror' | 'imageloadstart';
export type TImageSourceObjectEventTypes = 'propertychange';
export type ImageSourceEventTypes = 'imageloadend' | 'imageloaderror' | 'imageloadstart';
export interface Options {
    attributions?: AttributionLike | undefined;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    projection?: ProjectionLike | undefined;
    resolutions?: number[] | undefined;
    state?: State | undefined;
}
export enum ImageSourceEventType {
    IMAGELOADSTART = 'imageloadstart',
    IMAGELOADEND = 'imageloadend',
    IMAGELOADERROR = 'imageloaderror',
}
export default abstract class ImageSource extends Source {
    constructor(options: Options);
    protected findNearestResolution(resolution: number): number;
    protected abstract getImageInternal(
        extent: Extent,
        resolution: number,
        pixelRatio: number,
        projection: Projection,
    ): ImageBase;
    /**
     * Handle image change events.
     */
    protected handleImageChange(event: BaseEvent): void;
    getImage(extent: Extent, resolution: number, pixelRatio: number, projection: Projection): ImageBase;
    getResolutions(): number[];
    on(type: TImageSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TImageSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TImageSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TImageSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TImageSourceBaseEventTypes | TImageSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TImageSourceImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    on(type: TImageSourceImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    once(type: TImageSourceImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    once(type: TImageSourceImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    un(
        type: TImageSourceImageSourceEventTypes | TImageSourceImageSourceEventTypes[],
        listener: ListenerFunction<ImageSourceEvent>,
    ): void;
    on(type: TImageSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TImageSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TImageSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TImageSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TImageSourceObjectEventTypes | TImageSourceObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
export class ImageSourceEvent extends BaseEvent {
    constructor(type: string, image: ImageWrapper);
    /**
     * The image related to the event.
     */
    image: ImageWrapper;
}
/**
 * Default image load function for image sources that use module:ol/Image~Image image
 * instances.
 */
export function defaultImageLoadFunction(image: ImageWrapper, src: string): void;
