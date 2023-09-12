import { Euler } from "./Euler.js";
import { Quaternion } from "./Quaternion.js";
import { Vector3 } from "./Vector3.js";
/**
 * @author mrdoob / http://mrdoob.com/
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author jordi_ros / http://plattsoft.com
 * @author D1plo1d / http://github.com/D1plo1d
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author timknip / http://www.floorplanner.com/
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 */
export class Matrix4 {
    constructor();
    elements: number[];
    isMatrix4: boolean;
    set(
        n11: number,
        n12: number,
        n13: number,
        n14: number,
        n21: number,
        n22: number,
        n23: number,
        n24: number,
        n31: number,
        n32: number,
        n33: number,
        n34: number,
        n41: number,
        n42: number,
        n43: number,
        n44: number,
    ): Matrix4;
    identity(): Matrix4;
    clone(): Matrix4;
    copy(m: Matrix4): Matrix4;
    copyPosition(m: Matrix4): Matrix4;
    extractBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
    makeBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
    extractRotation(m: Matrix4): Matrix4;
    makeRotationFromEuler(euler: Euler): Matrix4;
    makeRotationFromQuaternion(q: Quaternion): Matrix4;
    lookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix4;
    multiply(m: Matrix4): Matrix4;
    premultiply(m: Matrix4): Matrix4;
    multiplyMatrices(a: Matrix4, b: Matrix4): Matrix4;
    multiplyScalar(s: number): Matrix4;
    applyToBufferAttribute(attribute: THREE.BufferAttribute): THREE.BufferAttribute;
    determinant(): number;
    transpose(): Matrix4;
    setPosition(v: Vector3): Matrix4;
    getInverse(m: Matrix4, throwOnDegenerate?: boolean): Matrix4;
    scale(v: Vector3): Matrix4;
    getMaxScaleOnAxis(): number;
    makeTranslation(x: number, y: number, z: number): Matrix4;
    makeRotationX(theta: number): Matrix4;
    makeRotationY(theta: number): Matrix4;
    makeRotationZ(theta: number): Matrix4;
    makeRotationAxis(axis: Vector3, angle: number): Matrix4;
    makeScale(x: number, y: number, z: number): Matrix4;
    makeShear(x: number, y: number, z: number): Matrix4;
    compose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;
    decompose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;
    makePerspective(left: number, right: number, top: number, bottom: number, near: number, far: number): Matrix4;
    makeOrthographic(left: number, right: number, top: number, bottom: number, near: number, far: number): Matrix4;
    equals(matrix: Matrix4): boolean;
    fromArray(array: number[], offset?: number): Matrix4;
    toArray(array?: number[], offset?: number): number[];
    fromBufferAttribute(attribute: THREE.BufferAttribute): Matrix4;
}
