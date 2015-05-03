// Type definitions for gl-matrix 2.2.2
// Project: https://github.com/toji/gl-matrix
// Definitions by: Tat <https://github.com/tatchx>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module GLM {
    interface IArray
    {
        [index: number]: number;
    } 
}

// Common
declare module glMatrix {
    /**
    * Convert Degree To Radian
    * @param a Angle in Degrees
    */  
    export function toRadian(a: number): number;  
}

// vec2
declare module vec2 {
    export function create(): GLM.IArray;
    export function clone(a: GLM.IArray): GLM.IArray;
    export function fromValues(x: number, y: number): GLM.IArray;
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function set(out: GLM.IArray, x: number, y: number): GLM.IArray;
    export function add(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function subtract(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function sub(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function divide(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function div(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function min(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function max(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function scale(out: GLM.IArray, a: GLM.IArray, b: number): GLM.IArray;
    export function scaleAndAdd(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, scale: number): GLM.IArray;
    export function distance(a: GLM.IArray, b: GLM.IArray): number;
    export function dist(a: GLM.IArray, b: GLM.IArray): number;
    export function squaredDistance(a: GLM.IArray, b: GLM.IArray): number;
    export function sqrDist(a: GLM.IArray, b: GLM.IArray): number;
    export function length(a: GLM.IArray): number;  
    export function len(a: GLM.IArray): number;
    export function squaredLength(a: GLM.IArray): number;
    export function sqrLen(a: GLM.IArray): number;  
    export function negate(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function inverse(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function normalize(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function dot(a: GLM.IArray, b: GLM.IArray): number;
    export function cross(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function lerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray;
    export function random(out: GLM.IArray): GLM.IArray;
    export function random(out: GLM.IArray, scale: number): GLM.IArray;
    export function transformMat2d(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray;
    export function transformMat3(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray;
    export function transformMat4(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray;
    export function forEach(out: GLM.IArray, string: number, offset: number, count: number,
        callback: (a: GLM.IArray, b: GLM.IArray, arg: any) => void, arg: any): GLM.IArray;
    export function forEach(out: GLM.IArray, string: number, offset: number, count: number,
        callback: (a: GLM.IArray, b: GLM.IArray) => void): GLM.IArray;
    export function str(a: GLM.IArray): string;    
}

// vec3
declare module vec3 {
    export function create(): GLM.IArray;
    export function clone(a: GLM.IArray): GLM.IArray;
    export function fromValues(x: number, y: number, z: number): GLM.IArray;
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;  
    export function set(out: GLM.IArray, x: number, y: number, z: number): GLM.IArray;
    export function add(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function subtract(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function sub(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function divide(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function div(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;  
    export function min(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function max(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;  
    export function scale(out: GLM.IArray, a: GLM.IArray, b: number): GLM.IArray;
    export function scaleAndAdd(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, scale: number): GLM.IArray;
    export function distance(a: GLM.IArray, b: GLM.IArray): number;
    export function dist(a: GLM.IArray, b: GLM.IArray): number;
    export function squaredDistance(a: GLM.IArray, b: GLM.IArray): number;
    export function sqrDist(a: GLM.IArray, b: GLM.IArray): number;
    export function length(a: GLM.IArray): number;  
    export function len(a: GLM.IArray): number;
    export function squaredLength(a: GLM.IArray): number;
    export function sqrLen(a: GLM.IArray): number;  
    export function negate(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function inverse(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function normalize(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function dot(a: GLM.IArray, b: GLM.IArray): number;  
    export function cross(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function lerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray;
    export function random(out: GLM.IArray): GLM.IArray;
    export function random(out: GLM.IArray, scale: number): GLM.IArray;
    export function rotateX(out: GLM.IArray, a: GLM.IArray, origin: GLM.IArray, angle: number): GLM.IArray;
    export function rotateY(out: GLM.IArray, a: GLM.IArray, origin: GLM.IArray, angle: number): GLM.IArray;
    export function rotateZ(out: GLM.IArray, a: GLM.IArray, origin: GLM.IArray, angle: number): GLM.IArray;
    export function transformMat3(out: GLM.IArray, a: GLM.IArray, mat: GLM.IArray): GLM.IArray;
    export function transformMat4(out: GLM.IArray, a: GLM.IArray, mat: GLM.IArray): GLM.IArray;  
    export function forEach(out: GLM.IArray, string: number, offset: number, count: number,
        callback: (a: GLM.IArray, b: GLM.IArray, arg: any) => void, arg: any): GLM.IArray;
    export function forEach(out: GLM.IArray, string: number, offset: number, count: number,
        callback: (a: GLM.IArray, b: GLM.IArray) => void): GLM.IArray;
    export function angle(a: GLM.IArray, b: GLM.IArray): number; 
    export function str(a: GLM.IArray): string;  
}

// vec4 
declare module vec4 {
    export function create(): GLM.IArray;
    export function clone(a: GLM.IArray): GLM.IArray;
    export function fromValues(x: number, y: number, z: number, w: number): GLM.IArray;
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;  
    export function set(out: GLM.IArray, x: number, y: number, z: number, w: number): GLM.IArray;  
    export function add(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function subtract(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function sub(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function divide(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function div(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;  
    export function min(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function max(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;  
    export function scale(out: GLM.IArray, a: GLM.IArray, b: number): GLM.IArray;
    export function scaleAndAdd(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, scale: number): GLM.IArray;
    export function distance(a: GLM.IArray, b: GLM.IArray): number;
    export function dist(a: GLM.IArray, b: GLM.IArray): number;
    export function squaredDistance(a: GLM.IArray, b: GLM.IArray): number;
    export function sqrDist(a: GLM.IArray, b: GLM.IArray): number;
    export function length(a: GLM.IArray): number;  
    export function len(a: GLM.IArray): number;
    export function squaredLength(a: GLM.IArray): number;
    export function sqrLen(a: GLM.IArray): number;  
    export function negate(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function inverse(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function normalize(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function dot(a: GLM.IArray, b: GLM.IArray): number;  
    export function lerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray;
    export function random(out: GLM.IArray): GLM.IArray;
    export function random(out: GLM.IArray, scale: number): GLM.IArray; 
    export function transformMat4(out: GLM.IArray, a: GLM.IArray, mat: GLM.IArray): GLM.IArray;
    export function transformQuat(out: GLM.IArray, a: GLM.IArray, quat: GLM.IArray): GLM.IArray;   
    export function forEach(out: GLM.IArray, string: number, offset: number, count: number,
        callback: (a: GLM.IArray, b: GLM.IArray, arg: any) => void, arg: any): GLM.IArray;  
    export function forEach(out: GLM.IArray, string: number, offset: number, count: number,
        callback: (a: GLM.IArray, b: GLM.IArray) => void): GLM.IArray;
    export function str(a: GLM.IArray): string;   
}

// mat2
declare module mat2 {
    export function create(): GLM.IArray;
    export function clone(a: GLM.IArray): GLM.IArray;
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function identity(a: GLM.IArray): GLM.IArray;
    export function transpose(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function adjoint(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function determinant(a: GLM.IArray): number;
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function rotate(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    export function scale(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray;
    export function str(a: GLM.IArray): string;
    export function frob(a: GLM.IArray): number;
    export function LDU(L: GLM.IArray, D: GLM.IArray, U: GLM.IArray, a: GLM.IArray): GLM.IArray;
}

// mat2d
declare module mat2d {
    export function create(): GLM.IArray;
    export function clone(a: GLM.IArray): GLM.IArray;
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function identity(a: GLM.IArray): GLM.IArray;  
    export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function determinant(a: GLM.IArray): number;
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray; 
    export function rotate(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray; 
    export function scale(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray;
    export function translate(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray;
    export function str(a: GLM.IArray): string;
    export function frob(a: GLM.IArray): number;
}

// mat3
declare module mat3 {
    export function create(): GLM.IArray;
    export function clone(a: GLM.IArray): GLM.IArray;
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function identity(a: GLM.IArray): GLM.IArray;    
    export function transpose(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function adjoint(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function determinant(a: GLM.IArray): number;
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function str(a: GLM.IArray): string;
    export function frob(a: GLM.IArray): number;  
    export function normalFromMat4(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function fromQuat(out: GLM.IArray, q: GLM.IArray): GLM.IArray;
    export function fromMat4(out: GLM.IArray, q: GLM.IArray): GLM.IArray;
    export function scale(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray;
    export function fromMat2d(out: GLM.IArray, q: GLM.IArray): GLM.IArray;
}

// mat4
declare module mat4 {
    export function create(): GLM.IArray;
    export function clone(a: GLM.IArray): GLM.IArray;
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function identity(a: GLM.IArray): GLM.IArray;     
    export function transpose(out: GLM.IArray, a: GLM.IArray): GLM.IArray; 
    export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function adjoint(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function determinant(a: GLM.IArray): number;
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function translate(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray;
    export function scale(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray;
    export function rotate(out: GLM.IArray, a: GLM.IArray, rad: number, axis: GLM.IArray): GLM.IArray;
    export function rotateX(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    export function rotateY(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    export function rotateZ(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    export function frustum(out: GLM.IArray, left: number, right: number,
        bottom: number, top: number, near: number, far: number): GLM.IArray;
    export function perspective(out: GLM.IArray, fov: number, aspect: number,
        near: number, far: number): GLM.IArray;
    export function ortho(out: GLM.IArray, left: number, right: number,
        bottom: number, top: number, near: number, far: number): GLM.IArray;
    export function lookAt(out: GLM.IArray, eye: GLM.IArray, 
        center: GLM.IArray, up: GLM.IArray): GLM.IArray;
    export function str(a: GLM.IArray): string;
    export function frob(a: GLM.IArray): number;
    export function fromRotationTranslation(out: GLM.IArray, quat: GLM.IArray,
        vec: GLM.IArray): GLM.IArray;
    export function fromQuat(out: GLM.IArray, quat: GLM.IArray): GLM.IArray;
}

// quat
declare module quat {
    export function create(): GLM.IArray;
    export function clone(a: GLM.IArray): GLM.IArray;
    export function fromValues(x: number, y: number, z: number, w: number): GLM.IArray;
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;  
    export function set(out: GLM.IArray, x: number, y: number, z: number, w: number): GLM.IArray;
    export function identity(a: GLM.IArray): GLM.IArray;
    export function setAxisAngle(out: GLM.IArray, axis: GLM.IArray, rad: number): GLM.IArray;
    export function add(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function scale(out: GLM.IArray, a: GLM.IArray, b: number): GLM.IArray;
    export function length(a: GLM.IArray): number;  
    export function len(a: GLM.IArray): number;  
    export function squaredLength(a: GLM.IArray): number;
    export function sqrLen(a: GLM.IArray): number;  
    export function normalize(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function lerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray;
    export function slerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray;
    export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function conjugate(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function str(a: GLM.IArray): string;
    export function rotateX(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    export function rotateY(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    export function rotateZ(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    export function fromMat3(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    export function setAxes(out: GLM.IArray, view: GLM.IArray, right: GLM.IArray, 
        up: GLM.IArray): GLM.IArray;
    export function rotationTo(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    export function calculateW(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
}