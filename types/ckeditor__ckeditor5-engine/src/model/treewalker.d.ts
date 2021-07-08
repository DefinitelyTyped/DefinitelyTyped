import { Item } from "./item";
import Position from "./position";
import Range from "./range";

export type TreeWalkerValueType = "elementStart" | "elementEnd" | "character" | "text";

export interface TreeWalkerValue {
    item: Item;
    length: number;
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

    constructor(options: {
        boundaries?: Range | undefined;
        direction?: TreeWalkerDirection | undefined;
        ignoreElementEnd?: boolean | undefined;
        shallow?: boolean | undefined;
        singleCharacters?: boolean | undefined;
        startPosition: Position;
    });
    [Symbol.iterator](): Iterator<TreeWalkerValue>;
    skip(skip: (value: TreeWalkerValue) => boolean): void;
}
