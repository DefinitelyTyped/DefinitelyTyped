import { Coordinate } from 'ol/coordinate';
import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import { Extent } from 'ol/extent';
import { ObjectEvent } from 'ol/Object';
import TileSource from 'ol/source/Tile';
import { Config } from 'ol/source/TileJSON';
import Tile from 'ol/Tile';
import { TileCoord } from 'ol/tilecoord';
import TileState from 'ol/TileState';
export class CustomTile extends Tile {
    constructor(tileCoord: TileCoord, state: TileState, src: string, extent: Extent, preemptive: boolean, jsonp: boolean);
    forDataAtCoordinate<T>(coordinate: Coordinate, callback: ((this: T, param1: any) => void), opt_this?: T, opt_request?: boolean): void;
    getData(coordinate: Coordinate): any;
    getImage(): HTMLImageElement;
}
export interface Options {
    preemptive?: boolean;
    jsonp?: boolean;
    tileJSON?: Config;
    url?: string;
}
export default class UTFGrid extends TileSource {
    constructor(options: Options);
    protected handleTileJSONError(): void;
    protected handleTileJSONResponse(tileJSON: Config): void;
    forDataAtCoordinateAndResolution(coordinate: Coordinate, resolution: number, callback: ((param0: any) => void), opt_request?: boolean): void;
    getTemplate(): string;
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
export interface UTFGridJSON {
    grid: string[];
    keys: string[];
    data?: { [key: string]: { [key: string]: any } };
}
