// Type definitions for D3JS d3-path module v1.0.1
// Project: https://github.com/d3/d3-path/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Path {
    moveTo(x: number, y: number): void;
    closePath(): void;
    lineTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    bezierCurveTo(cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    rect(x: number, y: number, w: number, h: number): void;
    toString(): string;
}

export function path(): Path;
