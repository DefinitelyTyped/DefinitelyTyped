// Type definitions for bezier-easing
// Project: https://github.com/gre/bezier-easing
// Definitions by: brian ridley <https://github.com/ptlis/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface BezierEasing {
    get(ratio: number): number;
    getPoints(): Array<number>;
    toString(): string;
    toCSS(): string;
}

declare function BezierEasing(points: Array<number>): BezierEasing;
declare function BezierEasing(a: number, b: number, c: number, d: number): BezierEasing;

declare namespace BezierEasing {
    let css: {
        'ease': BezierEasing,
        'linear': BezierEasing,
        'ease-in': BezierEasing,
        'ease-out': BezierEasing,
        'ease-in-out': BezierEasing
    };
}
