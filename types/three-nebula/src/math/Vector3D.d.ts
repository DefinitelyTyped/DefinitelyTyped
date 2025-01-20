import type { Euler, Vector3 } from "../core/three";

export default class Vector3D extends Vector3 {
    clear: () => Vector3D;

    scalar: (s: number) => Vector3D;

    addValue: (a: number, b: number, c: number) => Vector3D;

    toString: () => string;

    eulerFromDir: (vector3D: Vector3D) => Euler;
}
