import { ColorLike } from '../colorlike';
import BaseEvent from '../events/Event';
import ImageState from '../ImageState';
import { Size } from '../size';
import Fill from './Fill';
import ImageStyle from './Image';
import Stroke from './Stroke';

/**
 * Specify radius for regular polygons, or radius1 and radius2 for stars.
 */
export interface Options {
    fill?: Fill;
    points: number;
    radius?: number;
    radius1?: number;
    radius2?: number;
    angle?: number;
    displacement?: number[];
    stroke?: Stroke;
    rotation?: number;
    rotateWithView?: boolean;
    scale?: number | Size;
}
export interface RenderOptions {
    strokeStyle?: ColorLike;
    strokeWidth: number;
    size: number;
    lineCap: CanvasLineCap;
    lineDash: number[];
    lineDashOffset: number;
    lineJoin: CanvasLineJoin;
    miterLimit: number;
}
export default class RegularShape extends ImageStyle {
    constructor(options: Options);
    protected radius_: number;
    protected createRenderOptions(): RenderOptions;
    protected render(): void;
    /**
     * Clones the style.
     */
    clone(): RegularShape;
    /**
     * Get the anchor point in pixels. The anchor determines the center point for the
     * symbolizer.
     */
    getAnchor(): number[];
    /**
     * Get the angle used in generating the shape.
     */
    getAngle(): number;
    /**
     * Get the fill style for the shape.
     */
    getFill(): Fill;
    getHitDetectionImage(): HTMLCanvasElement;
    getHitDetectionImageSize(): Size;
    /**
     * Get the image icon.
     */
    getImage(pixelRatio: number): HTMLCanvasElement;
    getImageSize(): Size;
    getImageState(): ImageState;
    /**
     * Get the origin of the symbolizer.
     */
    getOrigin(): number[];
    /**
     * Get the number of points for generating the shape.
     */
    getPoints(): number;
    /**
     * Get the (primary) radius for the shape.
     */
    getRadius(): number;
    /**
     * Get the secondary radius for the shape.
     */
    getRadius2(): number | undefined;
    /**
     * Get the size of the symbolizer (in pixels).
     */
    getSize(): Size;
    /**
     * Get the stroke style for the shape.
     */
    getStroke(): Stroke;
    listenImageChange(listener: (p0: BaseEvent) => void): void;
    /**
     * Load not yet loaded URI.
     */
    load(): void;
    unlistenImageChange(listener: (p0: BaseEvent) => void): void;
}
