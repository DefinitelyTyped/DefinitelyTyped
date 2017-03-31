// Type definitions for math3d 0.2
// Project: https://github.com/adragonite/math3d
// Definitions by: Laszlo Jakab <https://github.com/laszlojakab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Vector3 {
    constructor(x?: number, y?: number, z?: number);

    static back: Vector3;
    static down: Vector3;
    static forward: Vector3;
    static left: Vector3;
    static one: Vector3;
    static right: Vector3;
    static up: Vector3;
    static zero: Vector3;
    static dimension: number;
    static FromVector4: (vector4: Vector4) => Vector3;

    homogeneous: Vector4;
    magnitude: number;
    values: number[];
    vector4: Vector4;
    x: number;
    y: number;
    z: number;

    add(vector3: Vector3): Vector3;
    average(vector3: Vector3): Vector3;
    cross(vector3: Vector3): Vector3;
    distanceTo(vector3: Vector3): number;
    dot(vector3: Vector3): number;
    equals(vector3: Vector3): boolean;
    mulScalar(scalar: number): Vector3;
    negate(): Vector3;
    normalize(): Vector3;
    scale(vector3: Vector3): Vector3;
    sub(vector3: Vector3): Vector3;
    toString(): string;
}

export class Vector4 {
    constructor(x?: number, y?: number, z?: number, w?: number);

    static one: Vector4;
    static zero: Vector4;
    static dimension: number;

    magnitude: number;
    values: number[];
    x: number;
    y: number;
    z: number;
    w: number;

    add(vector4: Vector4): Vector4;
    distanceTo(vector4: Vector4): number;
    dot(vector4: Vector4): number;
    equals(vector4: Vector4): boolean;
    mulScalar(scalar: number): Vector4;
    negate(): Vector4;
    normalize(): Vector3;
    sub(vector4: Vector4): Vector3;
    toString(): string;
}

export class Quaternion {
    constructor(x?: number, y?: number, z?: number, w?: number);
    static Euler(x?: number, y?: number, z?: number): Quaternion;
    static AngleAxis(axis: Vector3, angle: number): Quaternion;

    static identity: Quaternion;
    static zero: Quaternion;

    angleAxis: { axis: Vector3, angle: number };
    eulerAngles: { x: number, y: number, z: number };
    x: number;
    y: number;
    z: number;
    w: number;

    angleTo(quaternion: Quaternion): number;
    conjugate(): Quaternion;
    distanceTo(quaternion: Quaternion): number;
    dot(quaternion: Quaternion): number;
    equals(quaternion: Quaternion): boolean;
    inverse(): Quaternion;
    mul(quaternion: Quaternion): Quaternion;
    mulVector3(vector3: Vector3): Vector3;
    toString(): string;
}

export class Matrix4x4 {
    constructor(data: number[]);

    static FlipMatrix(flipX: boolean, flipY: boolean, flipZ: boolean): Matrix4x4;
    static ScaleMatrix(scale: number | Vector3): Matrix4x4;
    static RotationMatrix(quaternion: Quaternion): Matrix4x4;
    static TranslationMatrix(translation: Vector3): Matrix4x4;
    static TRS(translation: Vector3, rotation: Quaternion, scale: number | Vector3): Matrix4x4;
    static LocalToWorldMatrix(position: Vector3, rotation: Quaternion, scale: number | Vector3): Matrix4x4;
    static WorldToLocalMatrix(position: Vector3, rotation: Quaternion, scale: number | Vector3): Matrix4x4;

    static identity: Matrix4x4;
    static zero: Matrix4x4;

    columns: number[][];
    m11: number;
    m12: number;
    m13: number;
    m14: number;
    m21: number;
    m22: number;
    m23: number;
    m24: number;
    m31: number;
    m32: number;
    m33: number;
    m34: number;
    m41: number;
    m42: number;
    m43: number;
    m44: number;
    rows: number[][];
    size: { rows: number, columns: number };
    values: number[];

    determinant(): number;
    inverse(): Matrix4x4;
    negate(): Matrix4x4;
    transpose(): Matrix4x4;
    add(matrix4x4: Matrix4x4): Matrix4x4;
    sub(matrix4x4: Matrix4x4): Matrix4x4;
    mul(matrix4x4: Matrix4x4): Matrix4x4;
    mulScalar(scalar: number): Matrix4x4;
    mulVector3(vector3: Vector3): Vector3;
}

export class Transform {
    constructor(position?: Vector3, rotation?: Quaternion);

    forward: Vector3;
    localPosition: Vector3;
    localRotation: Quaternion;
    localToWorldMatrix: Matrix4x4;
    name: string;
    parent: Transform;
    position: Vector3;
    right: Vector3;
    root: Transform;
    rotation: Vector3;
    up: Vector3;
    worldToLocalMatrix: Matrix4x4;

    addChild(child: Transform): void;
    inverseTransformPosition(position: Vector3): Vector3;
    removeChild(child: Transform): void;
    transformPosition(position: Vector3): Vector3;
    translate(translation: Vector3, relativeTo?: Transform.Space): Transform;
    rotate(x: number, y: number, z: number, relativeTo?: Transform.Space): Transform;
}

export namespace Transform {
    enum Space {
        Self,
        World
    }
}
