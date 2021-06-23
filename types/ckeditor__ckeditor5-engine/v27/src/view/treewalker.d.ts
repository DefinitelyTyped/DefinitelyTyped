import Position from "./position";
import { Item } from "./item";
import Range from "./range";

export type TreeWalkerValueType = "elementStart" | "elementEnd" | "text";

export interface TreeWalkerValue {
    item: Item;
    length: number | undefined;
    nextPosition: Position;
    previousPosition: Position;
    type: TreeWalkerValueType;
}

export type TreeWalkerDirection = "forward" | "backward";

export default class TreeWalker implements Iterable<TreeWalkerValue> {
    readonly boundaries: Range;
    readonly direction: TreeWalkerDirection;
    readonly ignoreElementEnd: boolean;
    readonly position: Position;
    readonly shallow: boolean;
    readonly singleCharacters: boolean;

    constructor(options?: {
        boundaries?: Range;
        startPosition: Position;
        direction?: TreeWalkerDirection;
        singleCharacters?: boolean;
        shallow?: boolean;
        ignoreElementEnd?: boolean;
    });
    [Symbol.iterator](): Iterator<TreeWalkerValue>;
    next(): TreeWalkerValue;
    skip(skip: (value: TreeWalkerValue) => boolean): void;
}
