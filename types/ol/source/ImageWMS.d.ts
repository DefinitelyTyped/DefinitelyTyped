import ImageWrapper, { LoadFunction } from '../Image';
import { ObjectEvent } from '../Object';
import { Coordinate } from '../coordinate';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import ImageSource, { ImageSourceEvent } from './Image';
import { AttributionLike } from './Source';
import WMSServerType from './WMSServerType';

export type TImageWMSBaseEventTypes = 'change' | 'error';
export type TImageWMSImageSourceEventTypes = 'imageloadend' | 'imageloaderror' | 'imageloadstart';
export type TImageWMSObjectEventTypes = 'propertychange';
export interface Options {
    attributions?: AttributionLike | undefined;
    crossOrigin?: null | string | undefined;
    hidpi?: boolean | undefined;
    serverType?: WMSServerType | string | undefined;
    imageLoadFunction?: LoadFunction | undefined;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    params: Record<string, any>;
    projection?: ProjectionLike | undefined;
    ratio?: number | undefined;
    resolutions?: number[] | undefined;
    url: string;
}
export default class ImageWMS extends ImageSource {
    constructor(opt_options?: Options);
    /**
     * Return the GetFeatureInfo URL for the passed coordinate, resolution, and
     * projection. Return undefined if the GetFeatureInfo URL cannot be
     * constructed.
     */
    getFeatureInfoUrl(
        coordinate: Coordinate,
        resolution: number,
        projection: ProjectionLike,
        params: any,
    ): string | undefined;
    getImageInternal(extent: Extent, resolution: number, pixelRatio: number, projection: Projection): ImageWrapper;
    /**
     * Return the image load function of the source.
     */
    getImageLoadFunction(): LoadFunction;
    /**
     * Return the GetLegendGraphic URL, optionally optimized for the passed
     * resolution and possibly including any passed specific parameters. Returns
     * undefined if the GetLegendGraphic URL cannot be constructed.
     */
    getLegendUrl(resolution?: number, params?: any): string | undefined;
    /**
     * Get the user-provided params, i.e. those passed to the constructor through
     * the "params" option, and possibly updated using the updateParams method.
     */
    getParams(): any;
    /**
     * Return the URL used for this WMS source.
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
    on(type: TImageWMSBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TImageWMSBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TImageWMSBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TImageWMSBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TImageWMSBaseEventTypes | TImageWMSBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TImageWMSImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    on(type: TImageWMSImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    once(type: TImageWMSImageSourceEventTypes, listener: ListenerFunction<ImageSourceEvent>): EventsKey;
    once(type: TImageWMSImageSourceEventTypes[], listener: ListenerFunction<ImageSourceEvent>): EventsKey[];
    un(
        type: TImageWMSImageSourceEventTypes | TImageWMSImageSourceEventTypes[],
        listener: ListenerFunction<ImageSourceEvent>,
    ): void;
    on(type: TImageWMSObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TImageWMSObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TImageWMSObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TImageWMSObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TImageWMSObjectEventTypes | TImageWMSObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
}
