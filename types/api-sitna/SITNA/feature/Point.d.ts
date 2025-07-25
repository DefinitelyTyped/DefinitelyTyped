import { Feature, FeatureOptions, MeasurementOptions } from "./Feature";

export interface PointStyleOptions {
    fillColor?: string;
    fillOpacity?: number;
    fontColor?: string;
    fontSize?: number;
    labelKey?: string;
    labelOutlineColor?: string;
    labelOutlineWidth?: number;
    labelRotationKey?: string;
    radius?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWidth?: number;
}

export interface PointOptions extends FeatureOptions, PointStyleOptions {
    group?: string;
}

export class Point extends Feature {
    STYLETYPE: string;

    constructor(coords: number[], options?: PointOptions);

    getCoordinates(options?: MeasurementOptions): number[];
    setCoordinates(coordinates: number[]): this;
    setStyle(style: PointStyleOptions): this;
}

export default Point;
