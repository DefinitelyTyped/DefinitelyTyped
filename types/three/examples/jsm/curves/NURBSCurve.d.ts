import { Curve, Vector2, Vector3, Vector4 } from "../../../src/Three.js";

export class NURBSCurve extends Curve<Vector3> {
    degree: number;
    knots: number[];
    controlPoints: Vector2[] | Vector3[] | Vector4[];
    startKnot: number;
    endKnot: number;

    constructor(
        degree: number,
        knots: number[],
        controlPoints: Vector2[] | Vector3[] | Vector4[],
        startKnot?: number,
        endKnot?: number,
    );
}
