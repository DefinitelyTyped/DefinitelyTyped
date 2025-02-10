import { Curve, CurveJSON, Vector2, Vector3, Vector4 } from "three";

export interface NURBSCurveJSON extends CurveJSON {
    degree: number;
    knots: number[];
    controlPoints: number[][];
    startKnot: number;
    endKnot: number;
}

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

    toJSON(): NURBSCurveJSON;
    fromJSON(json: NURBSCurveJSON): this;
}
