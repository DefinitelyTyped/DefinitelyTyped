import { Coordinate } from './coordinate';
import { Extent } from './extent';
import Projection from './proj/Projection';
import Triangulation from './reproj/Triangulation';

export interface ImageExtent {
    extent: Extent;
    image: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
}
/**
 * Calculates ideal resolution to use from the source in order to achieve
 * pixel mapping as close as possible to 1:1 during reprojection.
 * The resolution is calculated regardless of what resolutions
 * are actually available in the dataset (TileGrid, Image, ...).
 */
export function calculateSourceExtentResolution(
    sourceProj: Projection,
    targetProj: Projection,
    targetExtent: Extent,
    targetResolution: number,
): number;
/**
 * Calculates ideal resolution to use from the source in order to achieve
 * pixel mapping as close as possible to 1:1 during reprojection.
 * The resolution is calculated regardless of what resolutions
 * are actually available in the dataset (TileGrid, Image, ...).
 */
export function calculateSourceResolution(
    sourceProj: Projection,
    targetProj: Projection,
    targetCenter: Coordinate,
    targetResolution: number,
): number;
/**
 * Renders the source data into new canvas based on the triangulation.
 */
export function render(
    width: number,
    height: number,
    pixelRatio: number,
    sourceResolution: number,
    sourceExtent: Extent,
    targetResolution: number,
    targetExtent: Extent,
    triangulation: Triangulation,
    sources: ImageExtent[],
    gutter: number,
    opt_renderEdges?: boolean,
    opt_interpolate?: any,
): HTMLCanvasElement;
