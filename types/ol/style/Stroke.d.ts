import { Color } from '../color';
import { ColorLike } from '../colorlike';

export interface Options {
    color?: Color | ColorLike;
    lineCap?: CanvasLineCap;
    lineJoin?: CanvasLineJoin;
    lineDash?: number[];
    lineDashOffset?: number;
    miterLimit?: number;
    width?: number;
}
export default class Stroke {
    constructor(opt_options?: Options);
    clone(): Stroke;
    getColor(): Color | ColorLike;
    getLineCap(): CanvasLineCap;
    getLineDash(): number[];
    getLineDashOffset(): number;
    getLineJoin(): CanvasLineJoin;
    getMiterLimit(): number;
    getWidth(): number;
    setColor(color: Color | ColorLike): void;
    setLineCap(lineCap: CanvasLineCap | undefined): void;
    setLineDash(lineDash: number[]): void;
    setLineDashOffset(lineDashOffset: number | undefined): void;
    setLineJoin(lineJoin: CanvasLineJoin | undefined): void;
    setMiterLimit(miterLimit: number | undefined): void;
    setWidth(width: number | undefined): void;
}
