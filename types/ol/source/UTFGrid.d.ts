import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import Event from '../events/Event';
import { Extent } from '../extent';
import { ObjectEvent } from '../Object';
import Tile from '../Tile';
import { TileCoord } from '../tilecoord';
import TileState from '../TileState';
import TileSource from './Tile';
import { Config } from './TileJSON';

export interface Options {
    preemptive?: boolean;
    jsonp?: boolean;
    tileJSON?: Config;
    url?: string;
}
export interface UTFGridJSON {
    grid: string[];
    keys: string[];
    data?: { [key: string]: object };
}
export class CustomTile extends Tile {
    constructor(tileCoord: TileCoord, state: TileState, src: string, extent: Extent, preemptive: boolean, jsonp: boolean);
    forDataAtCoordinate<T>(coordinate: Coordinate, callback: (this: T, p0: any) => void, opt_this?: T, opt_request?: boolean): void;
    getData(coordinate: Coordinate): any;
    getImage(): HTMLImageElement;
}
export default class UTFGrid extends TileSource {
    constructor(options: Options);
    protected handleTileJSONError(): void;
    protected handleTileJSONResponse(tileJSON: Config): void;
    forDataAtCoordinateAndResolution(coordinate: Coordinate, resolution: number, callback: (p0: any) => void, opt_request?: boolean): void;
    getTemplate(): string | undefined;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
