import { Feature, FeatureOptions, MeasurementOptions } from "./Feature";

export interface PolygonStyleOptions {
    fillColor?: string;
    fillOpacity?: number;
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

export interface PolygonOptions extends FeatureOptions, PolygonStyleOptions {
    group?: string;
}

export class Polygon extends Feature {
    constructor(coords: number[][][], options?: PolygonOptions);

    getCoordinates(options?: { pointArray?: boolean } & MeasurementOptions): number[][][] | number[][];
    setCoordinates(coords: number[][][]): this;
    getLength(options?: MeasurementOptions): number;
    getArea(options?: MeasurementOptions): number;
    setStyle(style: PolygonStyleOptions): this;
}

export default Polygon;
