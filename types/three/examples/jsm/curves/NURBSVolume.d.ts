import { Vector3, Vector4 } from "../../../src/Three.js";

export class NURBSVolume {
    degree1: number;
    degree2: number;
    degree3: number;
    knots1: readonly number[];
    knots2: readonly number[];
    knots3: readonly number[];
    controlPoints: Vector4[][][];

    constructor(
        degree1: number,
        degree2: number,
        degree3: number,
        knots1: readonly number[],
        knots2: readonly number[],
        knots3: readonly number[],
        controlPoints: Vector4[][][],
    );

    getPoint(t1: number, t2: number, t3: number, target: Vector3): void;
}
