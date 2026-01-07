import { Vector3 } from "three";

declare function klein(v: number, u: number, target: Vector3): void;
declare function plane(u: number, v: number, target: Vector3): void;
declare function mobius(u: number, t: number, target: Vector3): void;
declare function mobius3d(u: number, t: number, target: Vector3): void;

export { klein, mobius, mobius3d, plane };
