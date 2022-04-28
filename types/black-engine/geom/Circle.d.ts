export class Circle {
    static getCircumferencePoint(x: any, y: any, r: any, angle: any, outVector?: any): any;
    constructor(x?: number, y?: number, r?: number);
    private x;
    private y;
    private r;
    set(x: number, y: number, r: number): Circle;
    clone(): Circle;
    copyTo(circle: Circle): Circle;
    copyFrom(circle: Circle): Circle;
    equals(circle: Circle, epsilon?: number): boolean;
    containsXY(x: number, y: number): boolean;
    contains(vector: Vector): boolean;
    zero(): Circle;
    intersects(circle: Circle): boolean;
    collide(circle: Circle): boolean;
    overlap(circle: Circle): boolean;
    center(outVector?: Vector): Vector;
    get volume(): number;
    get perimeter(): number;
    get left(): number;
    get right(): number;
    get top(): number;
    get bottom(): number;
    get topPoint(): Vector;
    get bottomPoint(): Vector;
    toString(digits?: number): string;
}
export namespace Circle {
    const __cache: Circle;
}
import { Vector } from './Vector';
