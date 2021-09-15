import TextProxy from "./textproxy";
import DocumentFragment from "./documentfragment";
import DocumentSelection from "./documentselection";
import Element from "./element";
import { Item } from "./item";
import LivePosition from "./liveposition";
import LiveRange from "./liverange";
import { Marker } from "./markercollection";
import Node from "./node";
import RootElement from "./rootelement";
import Position from "./position";
import TreeWalker, { TreeWalkerDirection, TreeWalkerValue } from "./treewalker";
import Selection from "./selection";
import Text from "./text";
import Operation from "./operation/operation";

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
        boundaries?: Range | undefined;
        direction?: TreeWalkerDirection | undefined;
        ignoreElementEnd?: boolean | undefined;
        shallow?: boolean | undefined;
        singleCharacters?: boolean | undefined;
        startPosition: Position;
    }): Generator<Item>;
    getJoined(otherRange: Range, loose?: boolean): Range | null;
    getMinimalFlatRanges(): Range[];
    getPositions(options: {
        boundaries?: Range | undefined;
        direction?: TreeWalkerDirection | undefined;
        ignoreElementEnd?: boolean | undefined;
        shallow?: boolean | undefined;
        singleCharacters?: boolean | undefined;
        startPosition: Position;
    }): Generator<Position>;
    getTransformedByOperation(operation: Operation): Range[];
    getTransformedByOperations(operations: Iterable<Operation>): Range[];
    getWalker(options?: {
        startPosition?: Position | undefined;
        singleCharacters?: boolean | undefined;
        shallow?: boolean | undefined;
        ignoreElementEnd?: boolean | undefined;
    }): TreeWalker;
    is(type: "position" | "model:position"): this is Position | LivePosition;
    is(type: "livePosition" | "model:livePosition"): this is LivePosition;
    is(type: "range" | "model:range"): this is Range | LiveRange;
    is(type: "liveRange" | "model:liveRange"): this is LiveRange;
    is(type: "marker" | "model:marker"): this is Marker;
    is(type: "$textProxy" | "model:$textProxy" | "textProxy" | "model:textProxy"): this is TextProxy;
    is(type: "documentFragment" | "model:documentFragment"): this is DocumentFragment;
    is(type: "selection" | "model:selection"): this is Selection | DocumentSelection;
    is(type: "documentSelection" | "model:documentSelection"): this is DocumentSelection;
    is(type: "node" | "model:node"): this is Node | Element | Text | RootElement;
    is(type: "$text" | "model:$text" | "text" | "model:text"): this is Text;
    is(type: "element" | "model:element"): this is Element | RootElement;
    is(type: "rootElement" | "model:rootElement"): this is RootElement;
    is<K extends string>(type: "element" | "model:element", name: K): this is (Element | RootElement) & { name: K };
    is<K extends string>(type: "rootElement" | "model:rootElement", name: K): this is RootElement & { name: K };
    is(type: string, name?: string): boolean;
    isEqual(otherRange: Range): boolean;
    isIntersecting(otherRange: Range): boolean;
    toJSON(): {
        start: ReturnType<Position["toJSON"]>;
        end: ReturnType<Position["toJSON"]>;
    };

    static fromJSON(json: ReturnType<Range["toJSON"]>, doc: Document): Range;
}
