import { Box3 } from "./Box3.js";
import { Plane } from "./Plane.js";
import { Vector2 } from "./Vector2.js";
import { Vector3 } from "./Vector3.js";
import { Vector4 } from "./Vector4.js";

import { BufferAttribute } from "../core/BufferAttribute.js";
import { InterleavedBufferAttribute } from "../core/InterleavedBufferAttribute.js";

export class Triangle {
    constructor(a?: Vector3, b?: Vector3, c?: Vector3);

    /**
     * @default new THREE.Vector3()
     */
    a: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    b: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    c: Vector3;

    set(a: Vector3, b: Vector3, c: Vector3): Triangle;
    setFromPointsAndIndices(points: Vector3[], i0: number, i1: number, i2: number): this;
    setFromAttributeAndIndices(
        attribute: BufferAttribute | InterleavedBufferAttribute,
        i0: number,
        i1: number,
        i2: number,
    ): this;
    clone(): this;
    copy(triangle: Triangle): this;
    getArea(): number;
    getMidpoint(target: Vector3): Vector3;
    getNormal(target: Vector3): Vector3;
    getPlane(target: Plane): Plane;
    getBarycoord(point: Vector3, target: Vector3): Vector3 | null;
    getInterpolation(point: Vector3, v1: Vector2, v2: Vector2, v3: Vector2, target: Vector2): Vector2 | null;
    getInterpolation(point: Vector3, v1: Vector3, v2: Vector3, v3: Vector3, target: Vector3): Vector3 | null;
    getInterpolation(point: Vector3, v1: Vector4, v2: Vector4, v3: Vector4, target: Vector4): Vector4 | null;
    containsPoint(point: Vector3): boolean;
    intersectsBox(box: Box3): boolean;
    isFrontFacing(direction: Vector3): boolean;
    closestPointToPoint(point: Vector3, target: Vector3): Vector3;
    equals(triangle: Triangle): boolean;

    static getNormal(a: Vector3, b: Vector3, c: Vector3, target: Vector3): Vector3;
    static getBarycoord(point: Vector3, a: Vector3, b: Vector3, c: Vector3, target: Vector3): Vector3 | null;
    static containsPoint(point: Vector3, a: Vector3, b: Vector3, c: Vector3): boolean;
    static getInterpolation(
        point: Vector3,
        p1: Vector3,
        p2: Vector3,
        p3: Vector3,
        v1: Vector2,
        v2: Vector2,
        v3: Vector2,
        target: Vector2,
    ): Vector2 | null;
    static getInterpolation(
        point: Vector3,
        p1: Vector3,
        p2: Vector3,
        p3: Vector3,
        v1: Vector3,
        v2: Vector3,
        v3: Vector3,
        target: Vector3,
    ): Vector3 | null;
    static getInterpolation(
        point: Vector3,
        p1: Vector3,
        p2: Vector3,
        p3: Vector3,
        v1: Vector4,
        v2: Vector4,
        v3: Vector4,
        target: Vector4,
    ): Vector4 | null;
    static getInterpolatedAttribute(
        attr: BufferAttribute | InterleavedBufferAttribute,
        i1: number,
        i2: number,
        i3: number,
        barycoord: Vector3,
        target: Vector2,
    ): Vector2;
    static getInterpolatedAttribute(
        attr: BufferAttribute | InterleavedBufferAttribute,
        i1: number,
        i2: number,
        i3: number,
        barycoord: Vector3,
        target: Vector3,
    ): Vector3;
    static getInterpolatedAttribute(
        attr: BufferAttribute | InterleavedBufferAttribute,
        i1: number,
        i2: number,
        i3: number,
        barycoord: Vector3,
        target: Vector4,
    ): Vector4;
    static isFrontFacing(a: Vector3, b: Vector3, c: Vector3, direction: Vector3): boolean;
}
