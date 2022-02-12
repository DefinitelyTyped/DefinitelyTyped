export function Body(x: any, y: any): void;
export class Body {
    constructor(x: any, y: any);
    pos: Vector2d;
    prevPos: Vector2d;
    force: Vector2d;
    velocity: Vector2d;
    mass: number;
    setPosition(x: any, y: any): void;
}
export function Vector2d(x: any, y: any): void;
export class Vector2d {
    constructor(x: any, y: any);
    x: any;
    y: any;
    reset(): void;
}
export function Body3d(x: any, y: any, z: any): void;
export class Body3d {
    constructor(x: any, y: any, z: any);
    pos: Vector3d;
    prevPos: Vector3d;
    force: Vector3d;
    velocity: Vector3d;
    mass: number;
    setPosition(x: any, y: any, z: any): void;
}
export function Vector3d(x: any, y: any, z: any): void;
export class Vector3d {
    constructor(x: any, y: any, z: any);
    x: any;
    y: any;
    z: any;
    reset(): void;
}
