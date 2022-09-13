import BaseEvent from '../events/Event';
import ImageState from '../ImageState';
import { Size } from '../size';

export interface Options {
    opacity: number;
    rotateWithView: boolean;
    rotation: number;
    scale: number | Size;
    displacement: number[];
}
export default abstract class ImageStyle {
    constructor(options: Options);
    /**
     * Clones the style.
     */
    clone(): ImageStyle;
    /**
     * Get the anchor point in pixels. The anchor determines the center point for the
     * symbolizer.
     */
    abstract getAnchor(): number[];
    /**
     * Get the displacement of the shape
     */
    getDisplacement(): number[];
    abstract getHitDetectionImage(): HTMLCanvasElement | HTMLVideoElement | HTMLImageElement;
    abstract getHitDetectionImageSize(): Size;
    /**
     * Get the image element for the symbolizer.
     */
    abstract getImage(pixelRatio: number): HTMLCanvasElement | HTMLVideoElement | HTMLImageElement;
    abstract getImageSize(): Size;
    abstract getImageState(): ImageState;
    /**
     * Get the symbolizer opacity.
     */
    getOpacity(): number;
    /**
     * Get the origin of the symbolizer.
     */
    abstract getOrigin(): number[];
    /**
     * Determine whether the symbolizer rotates with the map.
     */
    getRotateWithView(): boolean;
    /**
     * Get the symoblizer rotation.
     */
    getRotation(): number;
    /**
     * Get the symbolizer scale.
     */
    getScale(): number | Size;
    /**
     * Get the symbolizer scale array.
     */
    getScaleArray(): Size;
    /**
     * Get the size of the symbolizer (in pixels).
     */
    abstract getSize(): Size;
    abstract listenImageChange(listener: (p0: BaseEvent) => void): void;
    /**
     * Load not yet loaded URI.
     */
    abstract load(): void;
    /**
     * Set the opacity.
     */
    setOpacity(opacity: number): void;
    /**
     * Set whether to rotate the style with the view.
     */
    setRotateWithView(rotateWithView: boolean): void;
    /**
     * Set the rotation.
     */
    setRotation(rotation: number): void;
    /**
     * Set the scale.
     */
    setScale(scale: number | Size): void;
    abstract unlistenImageChange(listener: (p0: BaseEvent) => void): void;
}
