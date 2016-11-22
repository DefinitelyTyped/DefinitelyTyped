// Type definitions for math3.d.ts
// Project: https://github.com/adragonite/math3d
// Definitions by: Laszlo Jakab <https://github.com/laszlojakab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped 

export class Vector3 {
    constructor(x?: number, y?: number, z?: number);

    public static back: Vector3;
    public static down: Vector3;
    public static forward: Vector3;
    public static left: Vector3;
    public static one: Vector3;
    public static right: Vector3;
    public static up: Vector3;
    public static zero: Vector3;
    public static dimension: number;
    public static FromVector4: (vector4: Vector4) => Vector3;

    public homogeneous: Vector4;
    public magnitude: number;
    public values: number[];
    public vector4: Vector4;
    public x: number;
    public y: number;
    public z: number;

    public add(vector3: Vector3): Vector3;
    public average(vector3: Vector3): Vector3;
    public cross(vector3: Vector3): Vector3;
    public distanceTo(vector3: Vector3): number;
    public dot(vector3: Vector3): number;
    public equals(vector3: Vector3): boolean;
    public mulScalar(scalar: Number): Vector3;
    public negate(): Vector3;
    public normalize(): Vector3;
    public scale(vector3: Vector3): Vector3;
    public sub(vector3: Vector3): Vector3;
    public toString(): string;
}

export class Vector4 {
    constructor(x?: number, y?: number, z?: number, w?: number);

    public static one: Vector4;
    public static zero: Vector4;
    public static dimension: number;

    public magnitude: number;
    public values: number[];
    public x: number;
    public y: number;
    public z: number;
    public w: number;

    public add(vector4: Vector4): Vector4;
    public distanceTo(vector4: Vector4): number;
    public dot(vector4: Vector4): number;
    public equals(vector4: Vector4): boolean;
    public mulScalar(scalar: Number): Vector4;
    public negate(): Vector4;
    public normalize(): Vector3;
    public sub(vector4: Vector4): Vector3;
    public toString(): string;
}

export class Quaternion {
    constructor(x?: number, y?: number, z?: number, w?: number);
    public static Euler(x?: number, y?: number, z?: number): Quaternion;
    public static AngleAxis(axis: Vector3, angle: number): Quaternion;

    public static identity: Quaternion;
    public static zero: Quaternion;

    public angleAxis: { axis: Vector3, angle: number };
    public eulerAngles: { x: number, y: number, z: number };
    public x: number;
    public y: number;
    public z: number;
    public w: number;

    public angleTo(quaternion: Quaternion): number;
    public conjugate(): Quaternion;
    public distanceTo(quaternion: Quaternion): number;
    public dot(quaternion: Quaternion): number;
    public equals(quaternion: Quaternion): boolean;
    public inverse(): Quaternion;
    public mul(quaternion: Quaternion): Quaternion;
    public mulVector3(vector3: Vector3): Vector3;
    public toString(): string;
}

export class Matrix4x4 {
    constructor(data: number[]);

    public static FlipMatrix(flipX: boolean, flipY: boolean, flipZ: boolean): Matrix4x4;
    public static ScaleMatrix(scale: number | Vector3): Matrix4x4;
    public static RotationMatrix(quaternion: Quaternion): Matrix4x4;
    public static TranslationMatrix(translation: Vector3): Matrix4x4;
    public static TRS(translation: Vector3, rotation: Quaternion, scale: number | Vector3): Matrix4x4;
    public static LocalToWorldMatrix(position: Vector3, rotation: Quaternion, scale: number | Vector3): Matrix4x4;
    public static WorldToLocalMatrix(position: Vector3, rotation: Quaternion, scale: number | Vector3): Matrix4x4;

    public static identity: Matrix4x4;
    public static zero: Matrix4x4;

    public columns: number[][];
    public m11: number;
    public m12: number;
    public m13: number;
    public m14: number;
    public m21: number;
    public m22: number;
    public m23: number;
    public m24: number;
    public m31: number;
    public m32: number;
    public m33: number;
    public m34: number;
    public m41: number;
    public m42: number;
    public m43: number;
    public m44: number;
    public rows: number[][];
    public size: { rows: number, columns: number };
    public values: number[];

    public determinant(): number
    public inverse(): Matrix4x4;
    public negate(): Matrix4x4;
    public transpose(): Matrix4x4;
    public add(matrix4x4: Matrix4x4): Matrix4x4;
    public sub(matrix4x4: Matrix4x4): Matrix4x4;
    public mul(matrix4x4: Matrix4x4): Matrix4x4;
    public mulScalar(scalar: Number): Matrix4x4;
    public mulVector3(vector3: Vector3): Vector3;
}

export class Transform {
    constructor(position?: Vector3, rotation?: Quaternion);

    public forward: Vector3;
    public localPosition: Vector3;
    public localRotation: Quaternion;
    public localToWorldMatrix: Matrix4x4;
    public name: string;
    public parent: Transform;
    public position: Vector3;
    public right: Vector3;
    public root: Transform;
    public rotation: Vector3;
    public up: Vector3;
    public worldToLocalMatrix: Matrix4x4;

    public addChild(child: Transform): void;
    public inverseTransformPosition(position: Vector3): Vector3;
    public removeChild(child: Transform): void;
    public transformPosition(position: Vector3): Vector3;
    public translate(translation: Vector3, relativeTo?: Transform.Space): Transform;
    public rotate(x: number, y: number, z: number, relativeTo?: Transform.Space): Transform;
}

export module Transform {
    export enum Space {
        Self,
        World
    }
}
