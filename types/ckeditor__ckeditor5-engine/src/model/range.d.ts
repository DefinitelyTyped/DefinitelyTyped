import Document from "./document";
import DocumentFragment from "./documentfragment";
import Element from "./element";
import { Item } from "./item";
import Operation from "./operation/operation";
import Position from "./position";
import TreeWalker, { TreeWalkerDirection, TreeWalkerValue } from "./treewalker";

export default class Range implements Iterable<TreeWalkerValue> {
    readonly end: Position;
    isCollapsed: boolean;
    isFlat: boolean;
    root: Element | DocumentFragment;
    readonly start: Position;

    constructor(start: Position, end?: Position);
    [Symbol.iterator](): Iterator<TreeWalkerValue>;
    clone(): Range;
    containsItem(item: Item): boolean;
    containsPosition(position: Position): boolean;
    containsRange(otherRange: Range, loose?: boolean): boolean;
    getCommonAncestor(): Element | DocumentFragment | null;
    getContainedElement(): Element | null;
    getDifference(otherRange: Range): Range[];
    getIntersection(otherRange: Range): Range | null;
    getItems(options: {
        boundaries?: Range;
        direction?: TreeWalkerDirection;
        ignoreElementEnd?: boolean;
        shallow?: boolean;
        singleCharacters?: boolean;
        startPosition: Position;
    }): Generator<Item>;
    getJoined(otherRange: Range, loose?: boolean): Range | null;
    getMinimalFlatRanges(): Range[];
    getPositions(options: {
        boundaries?: Range;
        direction?: TreeWalkerDirection;
        ignoreElementEnd?: boolean;
        shallow?: boolean;
        singleCharacters?: boolean;
        startPosition: Position;
    }): Generator<Position>;
    getTransformedByOperation(operation: Operation): Range[];
    getTransformedByOperations(operations: Iterable<Operation>): Range[];
    getWalker(options?: {
        startPosition?: Position;
        singleCharacters?: boolean;
        shallow?: boolean;
        ignoreElementEnd?: boolean;
    }): TreeWalker;
    is(type: string): boolean;
    isEqual(otherRange: Range): boolean;
    isIntersecting(otherRange: Range): boolean;
    toJSON(): {
        start: ReturnType<Position["toJSON"]>;
        end: ReturnType<Position["toJSON"]>;
    };

    static fromJSON(json: ReturnType<Range["toJSON"]>, doc: Document): Range;
}
