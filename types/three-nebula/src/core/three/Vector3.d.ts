import { Euler } from "./Euler.js";
import { Matrix4 } from "./Matrix4.js";
import { Quaternion } from "./Quaternion.js";
/**
 * @author mrdoob / http://mrdoob.com/
 * @author kile / http://kile.stravaganza.org/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */
export class Vector3 {
    constructor(x?: number, y?: number, z?: number);
    x?: number;
    y?: number;
    z?: number;
    isVector3: boolean;
    set: (x: number, y: number, z: number) => Vector3;
    setScalar: (scalar: number) => Vector3;
    setX: (x: number) => Vector3;
    setY: (y: number) => Vector3;
    setZ: (z: number) => Vector3;
    setComponent: (index: number, value: number) => Vector3;
    getComponent: (index: number) => number;
    clone: () => Vector3;
    copy: (v: Vector3) => Vector3;
    add: (v: Vector3) => Vector3;
    addScalar: (s: number) => Vector3;
    addVectors: (a: Vector3, b: Vector3) => Vector3;
    addScaledVector: (v: Vector3, s: number) => Vector3;
    sub: (v: Vector3) => Vector3;
    subScalar: (s: number) => Vector3;
    subVectors: (a: Vector3, b: Vector3) => Vector3;
    multiply: (v: Vector3) => Vector3;
    multiplyScalar: (scalar: number) => Vector3;
    multiplyVectors: (a: Vector3, b: Vector3) => Vector3;
    applyEuler: (euler: Euler) => Vector3;
    applyAxisAngle: (axis: Vector3, angle: number) => Vector3;
    applyMatrix3: (m: THREE.Matrix3) => Vector3;
    applyMatrix4: (m: Matrix4) => Vector3;
    applyQuaternion: (q: Quaternion) => Vector3;
    project: (camera: THREE.Camera) => Vector3;
    unproject: (camera: THREE.Camera) => Vector3;
    transformDirection: (m: Matrix4) => Vector3;
    divide: (v: Vector3) => Vector3;
    divideScalar: (scalar: number) => Vector3;
    min: (v: Vector3) => Vector3;
    max: (v: Vector3) => Vector3;
    clamp: (min: Vector3, max: Vector3) => Vector3;
    clampScalar: (min: number, max: number) => Vector3;
    clampLength: (min: number, max: number) => Vector3;
    floor: () => Vector3;
    ceil: () => Vector3;
    round: () => Vector3;
    roundToZero: () => Vector3;
    negate: () => Vector3;
    dot: (v: Vector3) => number;
    lengthSq: () => number;
    length: () => number;
    lengthManhattan: () => number;
    normalize: () => Vector3;
    setLength: (length: number) => Vector3;
    lerp: (v: Vector3, alpha: number) => Vector3;
    lerpVectors: (v1: Vector3, v2: Vector3, alpha: number) => Vector3;
    cross: (v: Vector3) => Vector3;
    crossVectors: (a: Vector3, b: Vector3) => Vector3;
    projectOnVector: (vector: Vector3) => Vector3;
    projectOnPlane: (planeNormal: Vector3) => Vector3;
    reflect: (normal: Vector3) => Vector3;
    angleTo: (v: Vector3) => number;
    distanceTo: (v: Vector3) => number;
    distanceToSquared: (v: Vector3) => number;
    distanceToManhattan: (v: Vector3) => number;
    setFromSpherical: (s: THREE.Spherical) => Vector3;
    setFromSphericalCoords: (r: number, phi: number, theta: number) => Vector3;
    setFromCylindrical: (c: THREE.Cylindrical) => Vector3;
    setFromCylindricalCoords: (radius: number, theta: number, y: number) => Vector3;
    setFromMatrixPosition: (m: Matrix4) => Vector3;
    setFromMatrixScale: (m: Matrix4) => Vector3;
    setFromMatrixColumn: (m: Matrix4, index: number) => Vector3;
    equals: (v: Vector3) => boolean;
    fromArray: (xyz: number[], offset?: number) => Vector3;
    toArray: (array?: number[], offset?: number) => number[];
    fromBufferAttribute: (attribute: THREE.BufferAttribute, index: number) => Vector3;
    rotateX: (angle: number) => Vector3;
    rotateY: (angle: number) => Vector3;
    rotateZ: (angle: number) => Vector3;
    fromAttribute: (attribute: THREE.BufferAttribute, index: number, offset?: number) => Vector3;
    random: () => Vector3;
}
