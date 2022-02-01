import { ObjectEvent } from '../Object';
import { LoadFunction } from '../Tile';
import { NearestDirectionFunction } from '../array';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { AttributionLike } from './Source';
import { TileSourceEvent } from './Tile';
import XYZ from './XYZ';

export type TOSMBaseEventTypes = 'change' | 'error';
export type TOSMObjectEventTypes = 'propertychange';
export type TOSMTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
export interface Options {
    attributions?: AttributionLike | undefined;
    cacheSize?: number | undefined;
    crossOrigin?: null | string | undefined;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    maxZoom?: number | undefined;
    opaque?: boolean | undefined;
    reprojectionErrorThreshold?: number | undefined;
    tileLoadFunction?: LoadFunction | undefined;
    transition?: number | undefined;
    url?: string | undefined;
    wrapX?: boolean | undefined;
    zDirection?: number | NearestDirectionFunction | undefined;
}
/**
 * The attribution containing a link to the OpenStreetMap Copyright and License
 * page.
 */
export const ATTRIBUTION: string;
export default class OSM extends XYZ {
    constructor(opt_options?: Options);
    on(type: TOSMBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TOSMBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TOSMBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TOSMBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TOSMBaseEventTypes | TOSMBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TOSMObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TOSMObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TOSMObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TOSMObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TOSMObjectEventTypes | TOSMObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TOSMTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TOSMTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TOSMTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TOSMTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(type: TOSMTileSourceEventTypes | TOSMTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): void;
}
