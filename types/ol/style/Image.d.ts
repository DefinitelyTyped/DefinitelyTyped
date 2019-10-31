import { EventsKey } from '../events';
import Event from '../events/Event';
import ImageState from '../ImageState';
import { Size } from '../size';

export interface Options {
    opacity: number;
    rotateWithView: boolean;
    rotation: number;
    scale: number;
}
export default class ImageStyle {
    constructor(options: Options);
    clone(): ImageStyle;
    getAnchor(): number[];
    getHitDetectionImage(pixelRatio: number): HTMLCanvasElement | HTMLVideoElement | HTMLImageElement;
    getHitDetectionImageSize(): Size;
    getImage(pixelRatio: number): HTMLCanvasElement | HTMLVideoElement | HTMLImageElement;
    getImageSize(): Size;
    getImageState(): ImageState;
    getOpacity(): number;
    getOrigin(): number[];
    getRotateWithView(): boolean;
    getRotation(): number;
    getScale(): number;
    getSize(): Size;
    getSnapToPixel(): boolean;
    listenImageChange<T>(listener: (this: T, p0: Event) => void, thisArg: T): EventsKey | undefined;
    load(): void;
    setOpacity(opacity: number): void;
    setRotateWithView(rotateWithView: boolean): void;
    setRotation(rotation: number): void;
    setScale(scale: number): void;
    setSnapToPixel(snapToPixel: boolean): void;
    unlistenImageChange<T>(listener: (this: T, p0: Event) => void, thisArg: T): void;
}
