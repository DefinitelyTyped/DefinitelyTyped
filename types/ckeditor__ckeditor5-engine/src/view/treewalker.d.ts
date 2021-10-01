import Element from "./element";
import Position from "./position";
import Range from "./range";
import TextProxy from "./textproxy";

export type TreeWalkerValueType = "elementStart" | "elementEnd" | "text";

export type TreeWalkerValue =
    | {
          item: TextProxy;
          length: number;
          nextPosition: Position;
          previousPosition: Position;
          type: "text";
      }
    | {
          item: Element;
          length: number;
          nextPosition: Position;
          previousPosition: Position;
          type: "elementStart" | "elementEnd";
      };

export type TreeWalkerDirection = "forward" | "backward";

export default class TreeWalker implements Iterable<TreeWalkerValue> {
    readonly boundaries: Range;
    readonly direction: TreeWalkerDirection;
    readonly ignoreElementEnd: boolean;
    readonly position: Position;
    readonly shallow: boolean;
    readonly singleCharacters: boolean;

    constructor(options?: {
        boundaries?: Range | undefined;
        startPosition: Position;
        direction?: TreeWalkerDirection | undefined;
        singleCharacters?: boolean | undefined;
        shallow?: boolean | undefined;
        ignoreElementEnd?: boolean | undefined;
    });
    [Symbol.iterator](): Iterator<TreeWalkerValue>;
    next(): TreeWalkerValue;
    skip(skip: (value: TreeWalkerValue) => boolean): void;
}
