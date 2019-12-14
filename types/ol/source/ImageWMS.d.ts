import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import Event from '../events/Event';
import { LoadFunction } from '../Image';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import ImageSource, { ImageSourceEvent } from './Image';
import { AttributionLike } from './Source';
import WMSServerType from './WMSServerType';

export interface Options {
    attributions?: AttributionLike;
    crossOrigin?: string;
    hidpi?: boolean;
    serverType?: WMSServerType | string;
    imageLoadFunction?: LoadFunction;
    params: { [key: string]: any };
    projection?: ProjectionLike;
    ratio?: number;
    resolutions?: number[];
    url: string;
}
export default class ImageWMS extends ImageSource {
    constructor(opt_options?: Options);
    getGetFeatureInfoUrl(coordinate: Coordinate, resolution: number, projection: ProjectionLike, params: any): string | undefined;
    getImageLoadFunction(): LoadFunction;
    getParams(): any;
    getUrl(): string | undefined;
    setImageLoadFunction(imageLoadFunction: LoadFunction): void;
    setUrl(url: string | undefined): void;
    updateParams(params: any): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
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
