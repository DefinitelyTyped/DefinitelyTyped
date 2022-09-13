import { Point, Range } from './text-buffer';

export interface TextChange {
    newExtent: Point;
    oldExtent: Point;
    newRange: Range;
    oldRange: Range;
    newText: string;
    oldText: string;
    start: Point;
}
