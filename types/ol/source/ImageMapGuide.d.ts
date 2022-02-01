import ImageWrapper, { LoadFunction } from '../Image';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { Size } from '../size';
import ImageSource, { ImageSourceEvent } from './Image';

export type TImageMapGuideBaseEventTypes = 'change' | 'error';
export type TImageMapGuideImageSourceEventTypes = 'imageloadend' | 'imageloaderror' | 'imageloadstart';
export type TImageMapGuideObjectEventTypes = 'propertychange';
export interface Options {
    url?: string | undefined;
    crossOrigin?: null | string | undefined;
    displayDpi?: number | undefined;
    metersPerUnit?: number | undefined;
    hidpi?: boolean | undefined;
    useOverlay?: boolean | undefined;
    projection?: ProjectionLike | undefined;
    ratio?: number | undefined;
    resolutions?: number[] | undefined;
    imageLoadFunction?: LoadFunction | undefined;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    params?: any;
}
export default class ImageMapGuide extends ImageSource {
    constructor(options: Options);
    getImageInternal(extent: Extent, resolution: number, pixelRatio: number, projection: Projection): ImageWrapper;
    /**
     * Return the image load function of the source.
     */
    getImageLoadFunction(): LoadFunction;
    /**
     * Get the user-provided params, i.e. those passed to the constructor through
     * the "params" option, and possibly updated using the updateParams method.
     */
    getParams(): any;
    getUrl(
        baseUrl: string,
        params: Record<string, string | number>,
        extent: Extent,
        size: Size,
        projection: Projection,
    ): string;
    /**
     * Set the image load function of the MapGuide source.
     */
    setImageLoadFunction(imageLoadFunction: LoadFunction): void;
    /**
     * Update the user-provided params.
     */
    updateParams(params: any): void;
    on(type: TImageMapGuideBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TImageMapGuideBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TImageMapGuideBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TImageMapGuideBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TImageMapGuideBaseEventTypes | TImageMapGuideBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TImageMapGuideImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    on(type: TImageMapGuideImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    once(type: TImageMapGuideImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    once(type: TImageMapGuideImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    un(
        type: TImageMapGuideImageSourceEventTypes | TImageMapGuideImageSourceEventTypes[],
        listener: ListenerFunction<ImageSourceEvent>,
    ): void;
    on(type: TImageMapGuideObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TImageMapGuideObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TImageMapGuideObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TImageMapGuideObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TImageMapGuideObjectEventTypes | TImageMapGuideObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
