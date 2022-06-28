export class VectorScatter extends VectorScatterBase {
    static fromObject(...values: Array<number | VectorScatterBase>): VectorScatterBase;
    constructor(minX?: number, minY?: number, maxX?: number, maxY?: number, ease?: ((arg0: number) => number) | null);
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    ease: (arg0: Vector) => Vector;
    getValueAt(t: number): Vector;
}
import { VectorScatterBase } from './VectorScatterBase';
import { Vector } from '../geom/Vector';
