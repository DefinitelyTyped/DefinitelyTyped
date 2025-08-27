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
