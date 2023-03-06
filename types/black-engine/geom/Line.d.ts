export class Line {
    constructor(start: Vector, end: Vector);
    start: Vector;
    end: Vector;
    set(start: Vector, end: Vector): Line;
    clone(): Line;
    copyTo(line: Line): Line;
    copyFrom(line: Line): Line;
    equals(line: Line, epsilon?: number): boolean;
    get left(): number;
    get right(): number;
    get top(): number;
    get bottom(): number;
    reverse(): Line;
    normalize(): Line;
    scale(multiplier: any): Line;
    zero(): Line;
    length(): number;
    center(outVector?: Vector): Vector;
    get type(): string;
    containsXY(x: number, y: number): boolean;
    contains(vector: Vector): boolean;
    intersects(line: Line): boolean;
    intersectsCircle(circle: Circle): boolean;
    __isInBoundsXY(x: any, y: any): boolean;
    toString(digits?: number): string;
}
export namespace Line {
    const __cache: Line;
}
import { Circle } from './Circle';
import { Vector } from './Vector';
