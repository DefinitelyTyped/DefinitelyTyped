import { ColorLike } from '../colorlike';
import BaseEvent from '../events/Event';
import ImageState from '../ImageState';
import { Size } from '../size';
import Fill from './Fill';
import ImageStyle from './Image';
import Stroke from './Stroke';

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
    clone(): RegularShape;
    getAnchor(): number[];
    getAngle(): number;
    getFill(): Fill;
    getHitDetectionImage(): HTMLCanvasElement;
    getHitDetectionImageSize(): Size;
    getImage(pixelRatio: number): HTMLCanvasElement;
    getImageSize(): Size;
    getImageState(): ImageState;
    getOrigin(): number[];
    getPoints(): number;
    getRadius(): number;
    getRadius2(): number;
    getSize(): Size;
    getStroke(): Stroke;
    listenImageChange(listener: (p0: BaseEvent) => void): void;
    load(): void;
    unlistenImageChange(listener: (p0: BaseEvent) => void): void;
}
