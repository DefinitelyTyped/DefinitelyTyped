import { Vector } from '../../../geom/Vector';

export class Projection {
    private static __project;
    private axis;
    private verticesA;
    private verticesB;
    private rangeA;
    private rangeB;
    private offset;
    set(verticesA: Vector[], verticesB: Vector[], axis: Vector): void;
    refresh(): void;
}
export class Range {
    min: number;
    max: number;
}
