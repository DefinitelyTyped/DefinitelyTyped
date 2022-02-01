import ImageWrapper, { LoadFunction } from '../Image';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import ImageSource, { ImageSourceEvent } from './Image';
import { AttributionLike } from './Source';

export type TImageArcGISRestBaseEventTypes = 'change' | 'error';
export type TImageArcGISRestImageSourceEventTypes = 'imageloadend' | 'imageloaderror' | 'imageloadstart';
export type TImageArcGISRestObjectEventTypes = 'propertychange';
export interface Options {
    attributions?: AttributionLike | undefined;
    crossOrigin?: null | string | undefined;
    hidpi?: boolean | undefined;
    imageLoadFunction?: LoadFunction | undefined;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    params?: Record<string, any> | undefined;
    projection?: ProjectionLike | undefined;
    ratio?: number | undefined;
    resolutions?: number[] | undefined;
    url?: string | undefined;
}
export default class ImageArcGISRest extends ImageSource {
    constructor(opt_options?: Options);
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
    /**
     * Return the URL used for this ArcGIS source.
     */
    getUrl(): string | undefined;
    /**
     * Set the image load function of the source.
     */
    setImageLoadFunction(imageLoadFunction: LoadFunction): void;
    /**
     * Set the URL to use for requests.
     */
    setUrl(url: string | undefined): void;
    /**
     * Update the user-provided params.
     */
    updateParams(params: any): void;
    on(type: TImageArcGISRestBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TImageArcGISRestBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TImageArcGISRestBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TImageArcGISRestBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TImageArcGISRestBaseEventTypes | TImageArcGISRestBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TImageArcGISRestImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    on(type: TImageArcGISRestImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    once(type: TImageArcGISRestImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    once(type: TImageArcGISRestImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    un(
        type: TImageArcGISRestImageSourceEventTypes | TImageArcGISRestImageSourceEventTypes[],
        listener: ListenerFunction<ImageSourceEvent>,
    ): void;
    on(type: TImageArcGISRestObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TImageArcGISRestObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TImageArcGISRestObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TImageArcGISRestObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TImageArcGISRestObjectEventTypes | TImageArcGISRestObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
}
