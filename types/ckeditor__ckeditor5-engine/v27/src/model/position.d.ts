import Element from "./element";
import Document from "./document";
import DocumentFragment from "./documentfragment";
import Text from "./text";
import Node from "./node";
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
            boundaries?: Range;
            direction?: TreeWalkerDirection;
            ignoreElementEnd?: boolean;
            shallow?: boolean;
            singleCharacters?: boolean;
            startPosition: Position;
        },
    ): Position;
    getParentPath(): number[];
    getShiftedBy(shift: number): Position;
    getTransformedByOperation(operation: Operation): Position;
    hasSameParentAs(position: Position): boolean;
    is(type: string): boolean;
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
