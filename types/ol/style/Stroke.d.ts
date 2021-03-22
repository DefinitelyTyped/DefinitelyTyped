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
    /**
     * Clones the style.
     */
    clone(): Stroke;
    /**
     * Get the stroke color.
     */
    getColor(): Color | ColorLike;
    /**
     * Get the line cap type for the stroke.
     */
    getLineCap(): CanvasLineCap | undefined;
    /**
     * Get the line dash style for the stroke.
     */
    getLineDash(): number[];
    /**
     * Get the line dash offset for the stroke.
     */
    getLineDashOffset(): number | undefined;
    /**
     * Get the line join type for the stroke.
     */
    getLineJoin(): CanvasLineJoin | undefined;
    /**
     * Get the miter limit for the stroke.
     */
    getMiterLimit(): number | undefined;
    /**
     * Get the stroke width.
     */
    getWidth(): number | undefined;
    /**
     * Set the color.
     */
    setColor(color: Color | ColorLike): void;
    /**
     * Set the line cap.
     */
    setLineCap(lineCap: CanvasLineCap | undefined): void;
    /**
     * Set the line dash.
     * Please note that Internet Explorer 10 and lower do not support the
     * setLineDash method on the CanvasRenderingContext2D and therefore this
     * property will have no visual effect in these browsers.
     */
    setLineDash(lineDash: number[]): void;
    /**
     * Set the line dash offset.
     */
    setLineDashOffset(lineDashOffset: number | undefined): void;
    /**
     * Set the line join.
     */
    setLineJoin(lineJoin: CanvasLineJoin | undefined): void;
    /**
     * Set the miter limit.
     */
    setMiterLimit(miterLimit: number | undefined): void;
    /**
     * Set the width.
     */
    setWidth(width: number | undefined): void;
}
