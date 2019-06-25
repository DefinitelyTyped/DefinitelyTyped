import { Coordinate } from './coordinate';
import Event from './events/Event';
import PriorityQueue from './structs/PriorityQueue';
import Tile from './Tile';

export type PriorityFunction = ((param0: Tile, param1: string, param2: Coordinate, param3: number) => number);
export default class TileQueue extends PriorityQueue<any> {
    constructor(tilePriorityFunction: PriorityFunction, tileChangeCallback: (() => void));
    protected handleTileChange(event: Event): void;
    getTilesLoading(): number;
    loadMoreTiles(maxTotalLoading: number, maxNewLoads: number): void;
}
