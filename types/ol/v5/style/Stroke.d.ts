import { Color } from '../color';
import { ColorLike } from '../colorlike';

export interface Options {
    color?: Color | ColorLike | undefined;
    lineCap?: string | undefined;
    lineJoin?: string | undefined;
    lineDash?: number[] | undefined;
    lineDashOffset?: number | undefined;
    miterLimit?: number | undefined;
    width?: number | undefined;
}
export default class Stroke {
    constructor(opt_options?: Options);
    clone(): Stroke;
    getChecksum(): string;
    getColor(): Color | ColorLike;
    getLineCap(): string | undefined;
    getLineDash(): number[];
    getLineDashOffset(): number | undefined;
    getLineJoin(): string | undefined;
    getMiterLimit(): number | undefined;
    getWidth(): number | undefined;
    setColor(color: Color | ColorLike): void;
    setLineCap(lineCap: string | undefined): void;
    setLineDash(lineDash: number[]): void;
    setLineDashOffset(lineDashOffset: number | undefined): void;
    setLineJoin(lineJoin: string | undefined): void;
    setMiterLimit(miterLimit: number | undefined): void;
    setWidth(width: number | undefined): void;
}
