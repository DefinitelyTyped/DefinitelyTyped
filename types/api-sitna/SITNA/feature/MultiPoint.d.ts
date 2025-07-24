import { Feature, FeatureOptions } from './Feature';
import { PointOptions } from './Point';

export class MultiPoint extends Feature {

    constructor(coords: number[][], options?: PointOptions);

    getCoordinates(options?: object): number[][];
    setCoordinates(coords: number[][]): this;
    setStyle(style: object): this;
}

export default MultiPoint;