export class Polygon {
    static fromPath(path: string): Polygon;
    constructor(vertices?: Vector[]);
    private mVertices;
    private mLines;
    private mBounds;
    private mCenter;
    set(vertices: Vector[]): Polygon;
    copyTo(polygon: Polygon): Polygon;
    copyFrom(polygon: Polygon): Polygon;
    clone(): Polygon;
    get width(): number;
    get height(): number;
    containsXY(x: number, y: number): boolean;
    contains(vector: Vector): boolean;
    get perimeter(): number;
    collide(polygon: Polygon): boolean;
    collideCircle(circle: Circle): boolean;
    collideRectangle(rectangle: Rectangle): boolean;
    overlap(polygon: Polygon): boolean;
    overlapCircle(circle: Circle): boolean;
    overlapRectangle(rectangle: Rectangle): boolean;
    refresh(): Polygon;
    refreshCenter(): Polygon;
    refreshBounds(): Polygon;
    refreshLines(): Polygon;
    setRotation(rotation: number): Polygon;
    setTranslation(point: Vector): Polygon;
    get vertices(): Vector[];
    get center(): Vector;
    toString(digits?: number): string;
}
export namespace Polygon {
    const __cache: Polygon;
}
import { Vector } from './Vector';
import { Rectangle } from './Rectangle';
import { Circle } from './Circle';
