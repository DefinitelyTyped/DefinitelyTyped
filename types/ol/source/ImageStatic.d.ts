import { EventsKey } from '../events';
import Event from '../events/Event';
import { Extent } from '../extent';
import { LoadFunction } from '../Image';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import { Size } from '../size';
import ImageSource from './Image';
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
    getImageExtent(): Extent;
    getUrl(): string;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
