import { Coordinate } from './coordinate';
import BaseEvent from './events/Event';
import PriorityQueue from './structs/PriorityQueue';
import Tile from './Tile';

export type PriorityFunction = (p0: Tile, p1: string, p2: Coordinate, p3: number) => number;
export default class TileQueue extends PriorityQueue<any> {
    constructor(tilePriorityFunction: PriorityFunction, tileChangeCallback: () => any);
    protected handleTileChange(event: BaseEvent): void;
    getTilesLoading(): number;
    loadMoreTiles(maxTotalLoading: number, maxNewLoads: number): void;
}
