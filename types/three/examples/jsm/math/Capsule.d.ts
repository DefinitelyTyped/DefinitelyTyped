import { Box3, Line3, Vector3 } from "../../../src/Three.js";

export class Capsule {
    constructor(start?: Vector3, end?: Vector3, radius?: number);
    start: Vector3;
    end: Vector3;
    radius: number;

    set(start: Vector3, end: Vector3, radius: number): this;
    clone(): Capsule;
    copy(capsule: Capsule): this;
    getCenter(target: Vector3): Vector3;
    translate(v: Vector3): this;
    checkAABBAxis(
        p1x: number,
        p1y: number,
        p2x: number,
        p2y: number,
        minx: number,
        maxx: number,
        miny: number,
        maxy: number,
        radius: number,
    ): boolean;
    intersectsBox(box: Box3): boolean;
}
