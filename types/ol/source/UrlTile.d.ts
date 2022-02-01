import { ObjectEvent } from '../Object';
import Tile, { LoadFunction, UrlFunction } from '../Tile';
import { NearestDirectionFunction } from '../array';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { TileCoord } from '../tilecoord';
import TileGrid from '../tilegrid/TileGrid';
import { AttributionLike } from './Source';
import State from './State';
import TileSource, { TileSourceEvent } from './Tile';

export type TUrlTileBaseEventTypes = 'change' | 'error';
export type TUrlTileObjectEventTypes = 'propertychange';
export type TUrlTileTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
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
    zDirection?: number | NearestDirectionFunction | undefined;
    interpolate?: boolean | undefined;
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
    on(type: TUrlTileBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TUrlTileBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TUrlTileBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TUrlTileBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TUrlTileBaseEventTypes | TUrlTileBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TUrlTileObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TUrlTileObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TUrlTileObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TUrlTileObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TUrlTileObjectEventTypes | TUrlTileObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TUrlTileTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TUrlTileTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TUrlTileTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TUrlTileTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(
        type: TUrlTileTileSourceEventTypes | TUrlTileTileSourceEventTypes[],
        listener: ListenerFunction<TileSourceEvent>,
    ): void;
}
