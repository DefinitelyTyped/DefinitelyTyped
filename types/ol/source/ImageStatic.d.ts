import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { LoadFunction } from '../Image';
import ImageBase from '../ImageBase';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { Size } from '../size';
import ImageSource, { ImageSourceEvent } from './Image';
import { AttributionLike } from './Source';

export interface Options {
    attributions?: AttributionLike;
    crossOrigin?: string;
    imageExtent?: Extent;
    imageLoadFunction?: LoadFunction;
    projection?: ProjectionLike;
    imageSize?: Size;
    url: string;
}
export default class Static extends ImageSource {
    constructor(options: Options);
    protected getImageInternal(
        extent: Extent,
        resolution: number,
        pixelRatio: number,
        projection: Projection,
    ): ImageBase;
    getImageExtent(): Extent;
    getUrl(): string;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
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
