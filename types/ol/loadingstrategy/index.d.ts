declare module 'ol/loadingstrategy' {

  import { Extent } from 'ol/extent';
  import TileGrid from 'ol/tilegrid/TileGrid';

  export function all(extent: Extent, resolution: number): Extent[];

  export function bbox(extent: Extent, resolution: number): Extent[];

  export function tile(tileGrid: TileGrid): ((param0: Extent, param1: number) => Extent[]);

}
