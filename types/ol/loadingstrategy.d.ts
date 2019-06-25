import { Extent } from './extent';
import TileGrid from './tilegrid/TileGrid';

export function all(extent: Extent, resolution: number): Extent[];
export function bbox(extent: Extent, resolution: number): Extent[];
export function tile(tileGrid: TileGrid): ((param0: Extent, param1: number) => Extent[]);
