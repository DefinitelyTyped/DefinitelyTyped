import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import { Extent } from 'ol/extent';
import { LoadFunction } from 'ol/Image';
import { ObjectEvent } from 'ol/Object';
import { ProjectionLike } from 'ol/proj';
import { Size } from 'ol/size';
import ImageSource from 'ol/source/Image';
import { AttributionLike } from 'ol/source/Source';
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
    getImageExtent(): Extent;
    getUrl(): string;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
