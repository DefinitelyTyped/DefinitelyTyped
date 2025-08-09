import { Feature, FeatureOptions, MeasurementOptions } from "./Feature";

export interface PolylineStyleOptions {
    fontColor?: string;
    fontSize?: number;
    labelKey?: string;
    labelOutlineColor?: string;
    labelOutlineWidth?: number;
    labelRotationKey?: string;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWidth?: number;
}

export interface PolylineOptions extends FeatureOptions, PolylineStyleOptions {
    group?: string;
}

export class Polyline extends Feature {
    constructor(coords: number[][], options?: PolylineOptions);

    getCoordinates(options?: MeasurementOptions): number[][];
    setCoordinates(coords: number[][]): this;
    getLength(options?: MeasurementOptions): number;
    setStyle(style: PolylineStyleOptions): this;
}

export default Polyline;
