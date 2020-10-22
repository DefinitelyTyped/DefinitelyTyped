import { Color } from '../color';
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
    getColor(): Color;
    getSrc(): string | undefined;
    setAnchor(anchor: number[]): void;
}
