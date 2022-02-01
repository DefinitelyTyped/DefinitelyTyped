import { ObjectEvent } from '../Object';
import { LoadFunction } from '../Tile';
import { NearestDirectionFunction } from '../array';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { Size } from '../size';
import { AttributionLike } from './Source';
import { TileSourceEvent } from './Tile';
import TileImage from './TileImage';

export type TTileJSONBaseEventTypes = 'change' | 'error';
export type TTileJSONObjectEventTypes = 'propertychange';
export type TTileJSONTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
export interface Config {
    name?: string | undefined;
    description?: string | undefined;
    version?: string | undefined;
    attribution?: string | undefined;
    template?: string | undefined;
    legend?: string | undefined;
    scheme?: string | undefined;
    tiles: string[];
    grids?: string[] | undefined;
    minzoom?: number | undefined;
    maxzoom?: number | undefined;
    bounds?: number[] | undefined;
    center?: number[] | undefined;
}
export interface Options {
    attributions?: AttributionLike | undefined;
    cacheSize?: number | undefined;
    crossOrigin?: null | string | undefined;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    jsonp?: boolean | undefined;
    reprojectionErrorThreshold?: number | undefined;
    tileJSON?: Config | undefined;
    tileLoadFunction?: LoadFunction | undefined;
    tileSize?: number | Size | undefined;
    url?: string | undefined;
    wrapX?: boolean | undefined;
    transition?: number | undefined;
    zDirection?: number | NearestDirectionFunction | undefined;
}
export default class TileJSON extends TileImage {
    constructor(options: Options);
    protected handleTileJSONError(): void;
    protected handleTileJSONResponse(tileJSON: Config): void;
    getTileJSON(): Config;
    on(type: TTileJSONBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TTileJSONBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TTileJSONBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TTileJSONBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TTileJSONBaseEventTypes | TTileJSONBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TTileJSONObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TTileJSONObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TTileJSONObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TTileJSONObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TTileJSONObjectEventTypes | TTileJSONObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TTileJSONTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TTileJSONTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TTileJSONTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TTileJSONTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(
        type: TTileJSONTileSourceEventTypes | TTileJSONTileSourceEventTypes[],
        listener: ListenerFunction<TileSourceEvent>,
    ): void;
}
