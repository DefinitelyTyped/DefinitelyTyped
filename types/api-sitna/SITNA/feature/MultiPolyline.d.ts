import { Feature, FeatureOptions, MeasurementOptions } from './Feature';
import Polyline, { PolylineOptions } from './Polyline';

export class MultiPolyline extends Feature {

    constructor(coords: number[][][], options?: PolylineOptions);

    getCoordinates(options?: { pointArray?: boolean } & MeasurementOptions): number[][][] | number[][];
    setCoordinates(coords: number[][][]): this;
    getLength(options?: MeasurementOptions): number;
    setStyle(style: object): this;
}

export default MultiPolyline;