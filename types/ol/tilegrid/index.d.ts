import { Extent } from 'ol/extent';
import Corner from 'ol/extent/Corner';
import { ProjectionLike } from 'ol/proj';
import Projection from 'ol/proj/Projection';
import { Size } from 'ol/size';
import { TileCoord } from 'ol/tilecoord';
import TileGrid from 'ol/tilegrid/TileGrid';
export function createForExtent(extent: Extent, opt_maxZoom?: number, opt_tileSize?: number | Size, opt_corner?: Corner): TileGrid;
export function createForProjection(projection: ProjectionLike, opt_maxZoom?: number, opt_tileSize?: number | Size, opt_corner?: Corner): TileGrid;
export function createXYZ(opt_options?: XYZOptions): TileGrid;
export function extentFromProjection(projection: ProjectionLike): Extent;
export function getForProjection(projection: Projection): TileGrid;
export function wrapX(tileGrid: TileGrid, tileCoord: TileCoord, projection: Projection): TileCoord;
export interface XYZOptions {
    extent?: Extent;
    maxZoom?: number;
    minZoom?: number;
    tileSize?: number | Size;
}
