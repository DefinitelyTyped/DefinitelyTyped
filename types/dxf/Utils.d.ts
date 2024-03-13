import * as Common from "./Common";

export interface ParsedContent {
    box2: Box;
}

export type UtilVertex = [number, number];

// [ref](https://github.com/bjnortier/vecks/blob/master/src/Box2.js)
export interface Box {
    min: Common.Point2D;
    max: Common.Point2D;
    valid: boolean;
    width: number;
    heigh: number;
    expandByPoint(point: UtilVertex): void;
}
