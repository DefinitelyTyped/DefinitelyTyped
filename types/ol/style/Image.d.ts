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
    clone(): ImageStyle;
    abstract getAnchor(): number[];
    getDisplacement(): number[];
    abstract getHitDetectionImage(): HTMLCanvasElement | HTMLVideoElement | HTMLImageElement;
    abstract getHitDetectionImageSize(): Size;
    abstract getImage(pixelRatio: number): HTMLCanvasElement | HTMLVideoElement | HTMLImageElement;
    abstract getImageSize(): Size;
    abstract getImageState(): ImageState;
    getOpacity(): number;
    abstract getOrigin(): number[];
    getRotateWithView(): boolean;
    getRotation(): number;
    getScale(): number | Size;
    getScaleArray(): Size;
    abstract getSize(): Size;
    abstract listenImageChange(listener: (p0: BaseEvent) => void): void;
    abstract load(): void;
    setOpacity(opacity: number): void;
    setRotateWithView(rotateWithView: boolean): void;
    setRotation(rotation: number): void;
    setScale(scale: number | Size): void;
    abstract unlistenImageChange(listener: (p0: BaseEvent) => void): void;
}
