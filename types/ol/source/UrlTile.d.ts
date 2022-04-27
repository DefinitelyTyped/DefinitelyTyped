import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { ObjectEvent } from '../Object';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import Tile, { LoadFunction, UrlFunction } from '../Tile';
import { TileCoord } from '../tilecoord';
import TileGrid from '../tilegrid/TileGrid';
import { AttributionLike } from './Source';
import State from './State';
import TileSource, { TileSourceEvent } from './Tile';

export interface Options {
    attributions?: AttributionLike | undefined;
    attributionsCollapsible?: boolean | undefined;
    cacheSize?: number | undefined;
    opaque?: boolean | undefined;
    projection?: ProjectionLike | undefined;
    state?: State | undefined;
    tileGrid?: TileGrid | undefined;
    tileLoadFunction: LoadFunction;
    tilePixelRatio?: number | undefined;
    tileUrlFunction?: UrlFunction | undefined;
    url?: string | undefined;
    urls?: string[] | undefined;
    wrapX?: boolean | undefined;
    transition?: number | undefined;
    key?: string | undefined;
    zDirection?: number | undefined;
}
export default class UrlTile extends TileSource {
    constructor(options: Options);
    protected tileLoadFunction: LoadFunction;
    protected urls: string[] | null;
    /**
     * Handle tile change events.
     */
    protected handleTileChange(event: BaseEvent): void;
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): Tile;
    /**
     * Return the tile load function of the source.
     */
    getTileLoadFunction(): LoadFunction;
    /**
     * Return the tile URL function of the source.
     */
    getTileUrlFunction(): UrlFunction;
    /**
     * Return the URLs used for this source.
     * When a tileUrlFunction is used instead of url or urls,
     * null will be returned.
     */
    getUrls(): string[] | null;
    /**
     * Set the tile load function of the source.
     */
    setTileLoadFunction(tileLoadFunction: LoadFunction): void;
    /**
     * Set the tile URL function of the source.
     */
    setTileUrlFunction(tileUrlFunction: UrlFunction, key?: string): void;
    /**
     * Set the URL to use for requests.
     */
    setUrl(url: string): void;
    /**
     * Set the URLs to use for requests.
     */
    setUrls(urls: string[]): void;
    tileUrlFunction(tileCoord: TileCoord, pixelRatio: number, projection: Projection): string | undefined;
    /**
     * Marks a tile coord as being used, without triggering a load.
     */
    useTile(z: number, x: number, y: number): void;
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
