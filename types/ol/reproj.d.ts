import { Coordinate } from './coordinate';
import { Extent } from './extent';
import Projection from './proj/Projection';
import Triangulation from './reproj/Triangulation';

export function calculateSourceResolution(
    sourceProj: Projection,
    targetProj: Projection,
    targetCenter: Coordinate,
    targetResolution: number,
): number;
export function render(
    width: number,
    height: number,
    pixelRatio: number,
    sourceResolution: number,
    sourceExtent: Extent,
    targetResolution: number,
    targetExtent: Extent,
    triangulation: Triangulation,
    sources: any[],
    gutter: number,
    opt_renderEdges?: boolean,
): HTMLCanvasElement;
