import { Extent } from '../../extent';
import { FillStrokeState } from '../canvas';
import CanvasReplay from './Replay';

export default class CanvasLineStringReplay extends CanvasReplay {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number, overlaps: boolean, declutterTree: any);
    applyStroke(): void;
    applyStroke(state: FillStrokeState): void;
}
