import DataTile, { Data } from '../DataTile';
import { ObjectEvent } from '../Object';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { ProjectionLike } from '../proj';
import Projection from '../proj/Projection';
import { Size } from '../size';
import TileGrid from '../tilegrid/TileGrid';
import { AttributionLike } from './Source';
import State from './State';
import TileSource, { TileSourceEvent } from './Tile';

export type TDataTileSourceBaseEventTypes = 'change' | 'error';
export type TDataTileSourceObjectEventTypes = 'propertychange';
export type TDataTileSourceTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
/**
 * Data tile loading function.  The function is called with z, x, and y tile coordinates and
 * returns {@link module:ol/DataTile~Data data} for a tile or a promise for the same.
 */
export type Loader = (p0: number, p1: number, p2: number) => Data | Promise<Data>;
export interface Options {
    loader?: Loader | undefined;
    attributions?: AttributionLike | undefined;
    attributionsCollapsible?: boolean | undefined;
    maxZoom?: number | undefined;
    minZoom?: number | undefined;
    tileSize?: number | Size | undefined;
    maxResolution?: number | undefined;
    projection?: ProjectionLike | undefined;
    tileGrid?: TileGrid | undefined;
    opaque?: boolean | undefined;
    state?: State | undefined;
    tilePixelRatio?: number | undefined;
    wrapX?: boolean | undefined;
    transition?: number | undefined;
    bandCount?: number | undefined;
    interpolate?: boolean | undefined;
}
export default class DataTileSource extends TileSource {
    constructor(options: Options);
    protected setLoader(loader: Loader): void;
    getTile(z: number, x: number, y: number, pixelRatio: number, projection: Projection): DataTile;
    /**
     * Handle tile change events.
     */
    handleTileChange_(event: BaseEvent): void;
    /**
     * Marks a tile coord as being used, without triggering a load.
     */
    useTile(z: number, x: number, y: number, projection: Projection): void;
    on(type: TDataTileSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TDataTileSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TDataTileSourceBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TDataTileSourceBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(
        type: TDataTileSourceBaseEventTypes | TDataTileSourceBaseEventTypes[],
        listener: ListenerFunction<BaseEvent>,
    ): void;
    on(type: TDataTileSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TDataTileSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TDataTileSourceObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TDataTileSourceObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(
        type: TDataTileSourceObjectEventTypes | TDataTileSourceObjectEventTypes[],
        listener: ListenerFunction<ObjectEvent>,
    ): void;
    on(type: TDataTileSourceTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TDataTileSourceTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TDataTileSourceTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TDataTileSourceTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(
        type: TDataTileSourceTileSourceEventTypes | TDataTileSourceTileSourceEventTypes[],
        listener: ListenerFunction<TileSourceEvent>,
    ): void;
}
