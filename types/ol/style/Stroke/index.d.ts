declare module 'ol/style/Stroke' {

  import { Color } from 'ol/color';
  import { ColorLike } from 'ol/colorlike';

  export interface Options {
    color?: Color | ColorLike;
    lineCap?: string;
    lineJoin?: string;
    lineDash?: number[];
    lineDashOffset?: number;
    miterLimit?: number;
    width?: number;
  }

  export default class Stroke {
    constructor(opt_options?: Options);
    clone(): Stroke;
    getChecksum(): string;
    getColor(): Color | ColorLike;
    getLineCap(): string;
    getLineDash(): number[];
    getLineDashOffset(): number;
    getLineJoin(): string;
    getMiterLimit(): number;
    getWidth(): number;
    setColor(color: Color | ColorLike): void;
    setLineCap(lineCap: string): void;
    setLineDash(lineDash: number[]): void;
    setLineDashOffset(lineDashOffset: number): void;
    setLineJoin(lineJoin: string): void;
    setMiterLimit(miterLimit: number): void;
    setWidth(width: number): void;
  }

}
