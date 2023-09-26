// Type definitions for smallest-enclosing-circle 1.0
// Project: https://github.com/rowanwins/smallest-enclosing-circle#readme
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace smallestEnclosingCircle;

interface Point {
    x: number;
    y: number;
}

interface Circle extends Point {
    r: number;
}

declare function enclosingCircle(points: readonly Point[]): Circle;

export = enclosingCircle;
