import Element from "./element";
import Position from "./position";
import Range from "./range";
import TextProxy from "./textproxy";

export type TreeWalkerValueType = "elementStart" | "elementEnd" | "character" | "text";

export type TreeWalkerValue =
    | {
          item: TextProxy;
          length: number;
          nextPosition: Position;
          previousPosition: Position;
          type: "character" | "text";
      }
    | {
          item: Element;
          length: number;
          nextPosition: Position;
          previousPosition: Position;
          type: "elementStart" | "elementEnd";
      };

export type TreeWalkerDirection = "forward" | "backward";

export type TreeWalkerOptions =
    | {
          boundaries: Range;
          direction?: TreeWalkerDirection | undefined;
          ignoreElementEnd?: boolean | undefined;
          shallow?: boolean | undefined;
          singleCharacters?: boolean | undefined;
          startPosition?: Position | undefined;
      }
    | {
          boundaries?: Range | undefined;
          direction?: TreeWalkerDirection | undefined;
          ignoreElementEnd?: boolean | undefined;
          shallow?: boolean | undefined;
          singleCharacters?: boolean | undefined;
          startPosition: Position;
      };

export default class TreeWalker implements Iterable<TreeWalkerValue> {
    readonly boundaries: Range;
    readonly direction: TreeWalkerDirection;
    readonly ignoreElementEnd: boolean;
    readonly position: Position;
    readonly shallow: boolean;
    readonly singleCharacters: boolean;

    constructor(options: TreeWalkerOptions);
    [Symbol.iterator](): Iterator<TreeWalkerValue>;
    skip(skip: (value: TreeWalkerValue) => boolean): void;
}
