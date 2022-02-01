import { ObjectEvent } from '../Object';
import { LoadFunction, UrlFunction } from '../Tile';
import { NearestDirectionFunction } from '../array';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { ProjectionLike } from '../proj';
import { Size } from '../size';
import TileGrid from '../tilegrid/TileGrid';
import { AttributionLike } from './Source';
import { TileSourceEvent } from './Tile';
import TileImage from './TileImage';

export type TXYZBaseEventTypes = 'change' | 'error';
export type TXYZObjectEventTypes = 'propertychange';
export type TXYZTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
export interface Options {
    attributions?: AttributionLike | undefined;
    attributionsCollapsible?: boolean | undefined;
    cacheSize?: number | undefined;
    crossOrigin?: null | string | undefined;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    opaque?: boolean | undefined;
    projection?: ProjectionLike | undefined;
    reprojectionErrorThreshold?: number | undefined;
    maxZoom?: number | undefined;
    minZoom?: number | undefined;
    maxResolution?: number | undefined;
    tileGrid?: TileGrid | undefined;
    tileLoadFunction?: LoadFunction | undefined;
    tilePixelRatio?: number | undefined;
    tileSize?: number | Size | undefined;
    tileUrlFunction?: UrlFunction | undefined;
    url?: string | undefined;
    urls?: string[] | undefined;
    wrapX?: boolean | undefined;
    transition?: number | undefined;
    zDirection?: number | NearestDirectionFunction | undefined;
}
export default class XYZ extends TileImage {
    constructor(opt_options?: Options);
    on(type: TXYZBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TXYZBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TXYZBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TXYZBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TXYZBaseEventTypes | TXYZBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TXYZObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TXYZObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TXYZObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TXYZObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TXYZObjectEventTypes | TXYZObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TXYZTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TXYZTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TXYZTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TXYZTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(type: TXYZTileSourceEventTypes | TXYZTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): void;
}
