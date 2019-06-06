import { Color } from 'ol/color';
import { Size } from 'ol/size';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import IconOrigin from 'ol/style/IconOrigin';
import ImageStyle from 'ol/style/Image';
export default class Icon extends ImageStyle {
    constructor(opt_options?: Options);
    clone(): Icon;
    clone(): ImageStyle;
    getColor(): Color;
    getSrc(): string;
    setAnchor(anchor: number[]): void;
}
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
