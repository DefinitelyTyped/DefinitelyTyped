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
    displacement?: number[];
    offsetOrigin?: IconOrigin;
    opacity?: number;
    scale?: number | Size;
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
    getHitDetectionImage(): HTMLImageElement | HTMLCanvasElement;
    getHitDetectionImageSize(): Size;
    getImage(pixelRatio: number): HTMLImageElement | HTMLCanvasElement;
    getImageSize(): Size;
    getImageState(): ImageState;
    getOrigin(): number[];
    getPixelRatio(pixelRatio: number): number;
    getSize(): Size;
    getSrc(): string;
    listenImageChange(listener: (p0: BaseEvent) => void): void;
    load(): void;
    setAnchor(anchor: number[]): void;
    unlistenImageChange(listener: (p0: BaseEvent) => void): void;
}
