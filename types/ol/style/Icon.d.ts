import { Color } from '../color';
import BaseEvent from '../events/Event';
import ImageState from '../ImageState';
import { Size } from '../size';
import IconAnchorUnits from './IconAnchorUnits';
import IconOrigin from './IconOrigin';
import ImageStyle from './Image';

export interface Options {
    anchor?: number[];
    anchorOrigin?: IconOrigin;
    anchorXUnits?: IconAnchorUnits;
    anchorYUnits?: IconAnchorUnits;
    color?: Color | string;
    crossOrigin?: string;
    img?: HTMLImageElement | HTMLCanvasElement;
    offset?: number[];
    offsetOrigin?: IconOrigin;
    opacity?: number;
    scale?: number;
    rotateWithView?: boolean;
    rotation?: number;
    size?: Size;
    imgSize?: Size;
    src?: string;
}
export default class Icon extends ImageStyle {
    constructor(opt_options?: Options);
    clone(): Icon;
    getAnchor(): number[];
    getColor(): Color;
    getHitDetectionImage(pixelRatio: number): HTMLCanvasElement | HTMLVideoElement | HTMLImageElement;
    getHitDetectionImageSize(): Size;
    getImage(pixelRatio: number): HTMLImageElement | HTMLCanvasElement;
    getImageSize(): Size;
    getImageState(): ImageState;
    getOrigin(): number[];
    getSize(): Size;
    getSrc(): string;
    listenImageChange<T>(listener: (p0: BaseEvent) => void): void;
    load(): void;
    setAnchor(anchor: number[]): void;
    unlistenImageChange<T>(listener: (p0: BaseEvent) => void): void;
}
