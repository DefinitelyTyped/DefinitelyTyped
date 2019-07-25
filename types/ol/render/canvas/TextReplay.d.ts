import { Extent } from '../../extent';
import CanvasReplay from './Replay';

export default class CanvasTextReplay extends CanvasReplay {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number, overlaps: boolean, declutterTree: any);
    getImage(text: string, textKey: string, fillKey: string, strokeKey: string): HTMLCanvasElement;
}
export function measureTextWidths(font: string, lines: string[], widths: number[]): number;
