export class RadialScatter extends VectorScatterBase {
    constructor(x?: number, y?: number, minRadius?: number, maxRadius?: number);
    x: number;
    y: number;
    minRadius: number;
    maxRadius: number;
    getValue(): Vector;
}
import { Vector } from '../geom/Vector';
import { VectorScatterBase } from './VectorScatterBase';
