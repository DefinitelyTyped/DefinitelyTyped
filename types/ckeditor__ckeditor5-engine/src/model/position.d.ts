import TextProxy from "./textproxy";
import DocumentFragment from "./documentfragment";
import DocumentSelection from "./documentselection";
import Element from "./element";
import LivePosition from "./liveposition";
import LiveRange from "./liverange";
import { Marker } from "./markercollection";
import Node from "./node";
import Range from "./range";
import RootElement from "./rootelement";
import Selection from "./selection";
import Text from "./text";
import { Item } from "./item";
import { TreeWalkerDirection, TreeWalkerValue } from "./treewalker";
import Operation from "./operation/operation";

export function getNodeAfterPosition(
    position: Position,
    positionParent: Element | DocumentFragment,
    textNode: Text | null,
): Node | null;

export function getNodeAfterPosition(
    position: Position,
    positionParent: Element | DocumentFragment,
    textNode: Text | null,
): Node | null;

export function getNodeAfterPosition(position: Position, positionParent: Element | DocumentFragment): Text | null;

export type PositionStickiness = "toNone" | "toNext" | "toPrevious";
export type PositionRelation = "before" | "after" | "same" | "different";

export default class Position {
    readonly index: number;
    readonly isAtEnd: boolean;
    readonly isAtStart: boolean;
    readonly nodeAfter: Node | null;
    readonly nodeBefore: Node | null;
    offset: number;
    readonly parent: Element | DocumentFragment;
    readonly path: number[];
    readonly root: Element | DocumentFragment;
    stickiness: PositionStickiness;
    readonly textNode: Text | null;

    constructor(root: Element | DocumentFragment, path: number[], stickiness?: PositionStickiness);
    clone(): Position;
    compareWith(otherPosition: Position): PositionRelation;
    findAncestor(parentName: string): Element | null;
    getAncestors(): Item[];
    getCommonAncestor(position: Position): Element | DocumentFragment | null;
    getCommonPath(position: Position): number[];
    getLastMatchingPosition(
        skip: (value: TreeWalkerValue) => boolean,
        options?: {
            boundaries?: Range | undefined;
            direction?: TreeWalkerDirection | undefined;
            ignoreElementEnd?: boolean | undefined;
            shallow?: boolean | undefined;
            singleCharacters?: boolean | undefined;
            startPosition: Position;
        },
    ): Position;
    getParentPath(): number[];
    getShiftedBy(shift: number): Position;
    getTransformedByOperation(operation: Operation): Position;
    hasSameParentAs(position: Position): boolean;
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
    isAfter(otherPosition: Position): boolean;
    isBefore(otherPosition: Position): boolean;
    isEqual(otherPosition: Position): boolean;
    isTouching(otherPosition: Position): boolean;
    toJSON(): {
        root: ReturnType<Element["toJSON"]> | ReturnType<DocumentFragment["toJSON"]>;
        path: number[];
        stickiness: PositionStickiness;
    };

    static fromJSON(json: ReturnType<Position["toJSON"]>, doc: Document): Position;
}
