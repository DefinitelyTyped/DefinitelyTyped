import { ObjectEvent } from '../Object';
import { LoadFunction } from '../Tile';
import { NearestDirectionFunction } from '../array';
import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import { TileSourceEvent } from './Tile';
import XYZ from './XYZ';

export type TStamenBaseEventTypes = 'change' | 'error';
export type TStamenObjectEventTypes = 'propertychange';
export type TStamenTileSourceEventTypes = 'tileloadend' | 'tileloaderror' | 'tileloadstart';
export interface Options {
    cacheSize?: number | undefined;
    imageSmoothing?: boolean | undefined;
    interpolate?: boolean | undefined;
    layer: string;
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    reprojectionErrorThreshold?: number | undefined;
    tileLoadFunction?: LoadFunction | undefined;
    transition?: number | undefined;
    url?: string | undefined;
    wrapX?: boolean | undefined;
    zDirection?: number | NearestDirectionFunction | undefined;
}
export default class Stamen extends XYZ {
    constructor(options: Options);
    on(type: TStamenBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    on(type: TStamenBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    once(type: TStamenBaseEventTypes, listener: ListenerFunction<BaseEvent>): EventsKey;
    once(type: TStamenBaseEventTypes[], listener: ListenerFunction<BaseEvent>): EventsKey[];
    un(type: TStamenBaseEventTypes | TStamenBaseEventTypes[], listener: ListenerFunction<BaseEvent>): void;
    on(type: TStamenObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    on(type: TStamenObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    once(type: TStamenObjectEventTypes, listener: ListenerFunction<ObjectEvent>): EventsKey;
    once(type: TStamenObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): EventsKey[];
    un(type: TStamenObjectEventTypes | TStamenObjectEventTypes[], listener: ListenerFunction<ObjectEvent>): void;
    on(type: TStamenTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    on(type: TStamenTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    once(type: TStamenTileSourceEventTypes, listener: ListenerFunction<TileSourceEvent>): EventsKey;
    once(type: TStamenTileSourceEventTypes[], listener: ListenerFunction<TileSourceEvent>): EventsKey[];
    un(
        type: TStamenTileSourceEventTypes | TStamenTileSourceEventTypes[],
        listener: ListenerFunction<TileSourceEvent>,
    ): void;
}
