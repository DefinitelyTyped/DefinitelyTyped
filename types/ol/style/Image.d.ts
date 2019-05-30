import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import ImageState from 'ol/ImageState';
import { Size } from 'ol/size';
export default class ImageStyle {
    constructor(options: Options);
    getScale(): number;
    clone(): ImageStyle;
    getHitDetectionImage(pixelRatio: number): HTMLCanvasElement | HTMLVideoElement | HTMLImageElement;
    getHitDetectionImageSize(): Size;
    getImage(pixelRatio: number): HTMLCanvasElement | HTMLVideoElement | HTMLImageElement;
    getImageSize(): Size;
    getImageState(): ImageState;
    getOpacity(): number;
    getOrigin(): number[];
    getRotateWithView(): boolean;
    getRotation(): number;
    getAnchor(): number[];
    getSize(): Size;
    getSnapToPixel(): boolean;
    listenImageChange<T>(listener: ((this: T, param1: Event) => void), thisArg: T): EventsKey;
    load(): void;
    setOpacity(opacity: number): void;
    setRotateWithView(rotateWithView: boolean): void;
    setRotation(rotation: number): void;
    setScale(scale: number): void;
    setSnapToPixel(snapToPixel: boolean): void;
    unlistenImageChange<T>(listener: ((this: T, param1: Event) => void), thisArg: T): void;
}
export interface Options {
    opacity: number;
    rotateWithView: boolean;
    rotation: number;
    scale: number;
}
