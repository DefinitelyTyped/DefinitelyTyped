import { EventsKey } from '../events';
import Event from '../events/Event';
import { Extent } from '../extent';
import FeatureFormat from '../format/Feature';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import { Size } from '../size';
import { LoadFunction, UrlFunction } from '../Tile';
import TileGrid from '../tilegrid/TileGrid';
import VectorTile_1 from '../VectorTile';
import { AttributionLike } from './Source';
import State from './State';
import { TileSourceEvent } from './Tile';
import UrlTile from './UrlTile';

export interface Options {
    attributions?: AttributionLike;
    cacheSize?: number;
    extent?: Extent;
    format?: FeatureFormat;
    overlaps?: boolean;
    projection?: ProjectionLike;
    state?: State;
    tileClass?: VectorTile_1;
    maxZoom?: number;
    minZoom?: number;
    tileSize?: number | Size;
    tileGrid?: TileGrid;
    tileLoadFunction?: LoadFunction;
    tileUrlFunction?: UrlFunction;
    url?: string;
    transition?: number;
    urls?: string[];
    wrapX?: boolean;
}
export default class VectorTile extends UrlTile {
    constructor(options: Options);
    protected tileClass: VectorTile_1;
    clear(): void;
    getOverlaps(): boolean;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
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
