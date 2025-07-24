import { Feature, FeatureOptions, MeasurementOptions, Geometry } from './Feature';
import Polygon, { PolygonOptions } from './Polygon';

export interface CircleGeometry {
    center: number[];
    radius: number;
}

export class Circle extends Feature {

    constructor(geometry: CircleGeometry | number[][], options?: PolygonOptions);

    getCoordinates(options?: MeasurementOptions): number[][];
    setCoordinates(coords: CircleGeometry | Geometry): this;
    getCenter(): number[];
    getRadius(options?: MeasurementOptions): number;
    setStyle(style: object): this;
}

export default Circle;