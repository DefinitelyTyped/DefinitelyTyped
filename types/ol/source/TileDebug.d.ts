import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import { ObjectEvent } from 'ol/Object';
import { ProjectionLike } from 'ol/proj';
import { Size } from 'ol/size';
import TileSource from 'ol/source/Tile';
import Tile from 'ol/Tile';
import { TileCoord } from 'ol/tilecoord';
import TileGrid from 'ol/tilegrid/TileGrid';
export interface Options {
    projection?: ProjectionLike;
    tileGrid?: TileGrid;
    wrapX?: boolean;
}
export default class TileDebug extends TileSource {
    constructor(options: Options);
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
