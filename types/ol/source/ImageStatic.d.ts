import ImageWrapper, { LoadFunction } from '../Image';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { Size } from '../size';
import ImageSource, { ImageSourceEvent } from './Image';
import { AttributionLike } from './Source';

export type TStaticBaseEventTypes = 'change' | 'error';
export type TStaticImageSourceEventTypes = 'imageloadend' | 'imageloaderror' | 'imageloadstart';
export type TStaticObjectEventTypes = 'propertychange';
export interface Options {
    attributions?: AttributionLike | undefined;
    crossOrigin?: null | string | undefined;
    imageExtent?: Extent | undefined;
    imageLoadFunction?: LoadFunction | undefined;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    projection?: ProjectionLike | undefined;
    imageSize?: Size | undefined;
    url: string;
}
export default class Static extends ImageSource {
    constructor(options: Options);
    /**
     * Returns the image extent
     */
    getImageExtent(): Extent;
    getImageInternal(extent: Extent, resolution: number, pixelRatio: number, projection: Projection): ImageWrapper;
    /**
     * Return the URL used for this image source.
     */
    getUrl(): string;
    handleImageChange(evt: BaseEvent): void;
    on(type: TStaticBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TStaticBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TStaticBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TStaticBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TStaticBaseEventTypes | TStaticBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TStaticImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    on(type: TStaticImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    once(type: TStaticImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    once(type: TStaticImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    un(
        type: TStaticImageSourceEventTypes | TStaticImageSourceEventTypes[],
        listener: ListenerFunction<ImageSourceEvent>,
    ): void;
    on(type: TStaticObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TStaticObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TStaticObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TStaticObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TStaticObjectEventTypes | TStaticObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
