import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import { Versions } from '../format/IIIFInfo';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import { Size } from '../size';
import { AttributionLike } from './Source';
import State from './State';
import { TileSourceEvent } from './Tile';
import TileImage from './TileImage';

export interface Options {
    attributions?: AttributionLike | undefined;
    attributionsCollapsible?: boolean | undefined;
    cacheSize?: number | undefined;
    crossOrigin?: null | string | undefined;
    extent?: Extent | undefined;
    format?: string | undefined;
    imageSmoothing?: boolean | undefined;
    projection?: ProjectionLike | undefined;
    quality?: string | undefined;
    reprojectionErrorThreshold?: number | undefined;
    resolutions?: number[] | undefined;
    size: Size;
    sizes?: Size[] | undefined;
    state?: State | undefined;
    supports?: string[] | undefined;
    tilePixelRatio?: number | undefined;
    tileSize?: number | Size | undefined;
    transition?: number | undefined;
    url?: string | undefined;
    version?: Versions | undefined;
    zDirection?: number | undefined;
}
export default class IIIF extends TileImage {
    constructor(opt_options?: Options);
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadend', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloaderror', listener: (evt: TileSourceEvent) => void): void;
    on(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    once(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): EventsKey;
    un(type: 'tileloadstart', listener: (evt: TileSourceEvent) => void): void;
}
