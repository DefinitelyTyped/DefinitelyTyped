import Target from 'ol/events/Target';
import Projection from 'ol/proj/Projection';
import { TileCoord } from 'ol/tilecoord';
import TileState from 'ol/TileState';
export type LoadFunction = ((param0: Tile, param1: string) => void);
export interface Options {
    transition?: number;
}
export default class Tile extends Target {
    constructor(tileCoord: TileCoord, state: TileState, opt_options?: Options);
    protected state: TileState;
    protected changed(): void;
    getAlpha(id: string, time: number): number;
    getInterimTile(): Tile;
    getKey(): string;
    getState(): TileState;
    endTransition(id: string): void;
    inTransition(id: string): boolean;
    load(): void;
    refreshInterimChain(): void;
    setState(state: TileState): void;
    getTileCoord(): TileCoord;
}
export type UrlFunction = ((param0: TileCoord, param1: number, param2: Projection) => string);
