import { Feature, FeatureOptions, MeasurementOptions } from './Feature';
import { PolygonOptions } from './Polygon';

export class MultiPolygon extends Feature {

    constructor(coords: number[][][][], options?: PolygonOptions);

    getCoordinates(options?: { pointArray?: boolean } & MeasurementOptions): number[][][][] | number[][];
    setCoordinates(coords: number[][][][]): this;
    getLength(options?: MeasurementOptions): number;
    getArea(options?: MeasurementOptions): number;
    setStyle(style: object): this;
}

export default MultiPolygon;