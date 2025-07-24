import Point from './Point';

export interface MarkerStyleOptions {
    anchor?: number[];
    labelRotationKey?: string;
    classes?: string[];
    cssClass?: string;
    fontColor?: string;
    fontSize?: number;
    height?: number;
    labelKey?: string;
    labelOutlineColor?: string;
    labelOutlineWidth?: number;
    url?: string;
    width?: number;
}

export interface MarkerOptions extends MarkerStyleOptions {
    group?: string;
    angle?: string;
    data?: object | string;
    layer?: string;
    showPopup?: boolean;
    title?: string;
}

export class Marker extends Point {

    constructor(coords: number[], options?: MarkerOptions);
    getStyle(): MarkerStyleOptions;
    setStyle(style: MarkerStyleOptions): this;
}

export default Marker;