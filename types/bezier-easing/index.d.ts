// Type definitions for bezier-easing 2.0
// Project: https://github.com/gre/bezier-easing
// Definitions by: brian ridley <https://github.com/ptlis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace BezierEasing {
    type Easing = (x: number) => number;
}

declare function BezierEasing(mX1: number, mY1: number, mX2: number, mY2: number): BezierEasing.Easing;
export = BezierEasing;
export as namespace BezierEasing;
