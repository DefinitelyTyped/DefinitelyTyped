import { Extent } from 'ol/extent';
import CanvasReplay from 'ol/render/canvas/Replay';
export function measureTextWidths(font: string, lines: string[], widths: number[]): number;
export default class CanvasTextReplay extends CanvasReplay {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number, overlaps: boolean, declutterTree: any);
    getImage(text: string, textKey: string, fillKey: string, strokeKey: string): HTMLCanvasElement;
}
