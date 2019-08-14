import { Extent } from '../../extent';
import CanvasReplay from './Replay';

export default class CanvasPolygonReplay extends CanvasReplay {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number, overlaps: boolean, declutterTree: any);
}
