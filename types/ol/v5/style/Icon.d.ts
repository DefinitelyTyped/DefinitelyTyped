import { Color } from '../color';
import { Size } from '../size';
import IconAnchorUnits from './IconAnchorUnits';
import IconOrigin from './IconOrigin';
import ImageStyle from './Image';

export interface Options {
    anchor?: number[] | undefined;
    anchorOrigin?: IconOrigin | undefined;
    anchorXUnits?: IconAnchorUnits | undefined;
    anchorYUnits?: IconAnchorUnits | undefined;
    color?: Color | string | undefined;
    crossOrigin?: string | undefined;
    img?: HTMLImageElement | HTMLCanvasElement | undefined;
    offset?: number[] | undefined;
    offsetOrigin?: IconOrigin | undefined;
    opacity?: number | undefined;
    scale?: number | undefined;
    rotateWithView?: boolean | undefined;
    rotation?: number | undefined;
    size?: Size | undefined;
    imgSize?: Size | undefined;
    src?: string | undefined;
}
export default class Icon extends ImageStyle {
    constructor(opt_options?: Options);
    clone(): Icon;
    getColor(): Color;
    getSrc(): string | undefined;
    setAnchor(anchor: number[]): void;
}
