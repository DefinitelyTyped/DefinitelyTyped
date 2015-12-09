// Type definitions for poly2tri v0.9.10
// Project: http://github.com/r3mi/poly2tri.js/
// Definitions by: Elemar Junior <https://github.com/elemarjr/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module poly2tri {

    interface IPointLike {
        x: number;
        y: number;
    }

    class Point implements IPointLike {

        x: number;
        y: number;

        constructor(x: number, y: number);

        toString(): string;

        toJSON(): JSON;

        clone(): Point;

        set_zero(): Point;

        set(x: number, y: number): Point;

        negate(): Point;

        add(n: IPointLike): Point;
        
        sub(n: IPointLike): Point;

        mul(s: number): Point;

        length(): number;

        normalize(): number;

        equals(p: IPointLike): boolean;

        static negate(p: IPointLike): Point;

        static add(a: IPointLike, b: IPointLike): Point;

        static sub(a: IPointLike, b: IPointLike): Point;

        static mul(s: number, p: IPointLike): Point;

        static cross(a: number, b: number): number;

        static cross(a: IPointLike, b: number): number;

        static cross(a: IPointLike, b: IPointLike): number;

        static cross(a: number, b: IPointLike): number;

        static toStringBase(p: IPointLike): string;

        static toString(p: IPointLike): string;

        static compare(a: IPointLike, b: IPointLike): number;

        static equals(a: IPointLike, b: IPointLike): boolean;

        static dot(a: IPointLike, b: IPointLike): number;
    }


    class SweepContext {
        constructor(contour: Array<IPointLike>);

        constructor(contour: Array<IPointLike>, options: JSON);

        addHole(polyline: Array<IPointLike>): SweepContext;

        addHoles(holes: Array<Array<IPointLike>>): SweepContext;

        addPoint(point: IPointLike): SweepContext;

        addPoints(point: Array<IPointLike>): SweepContext;

        triangulate(): SweepContext;

        getBoundingBox(): { min: IPointLike; max: IPointLike; };

        getTriangles(): Array<Triangle>;
    }

    class Triangle {
        constructor(a: IPointLike, b: IPointLike, c: IPointLike);

        toString(): string;

        getPoint(index: number): IPointLike;

        getPoints(): Array<IPointLike>;

        containsPoint(point: IPointLike): boolean;

        containsPoints(p1: IPointLike, p2: IPointLike): boolean;

        isInterior(): boolean;
    }
}






