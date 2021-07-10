import Node from "./node";
import DocumentFragment from "./documentfragment";
import EditableElement from "./editableelement";
import TreeWalker, { TreeWalkerDirection, TreeWalkerValue } from "./treewalker";

export type PositionRelation = "before" | "after" | "same" | "different";

export default class Position {
    editableElement: EditableElement | null;
    readonly isAtEnd: boolean;
    readonly isAtStart: boolean;
    readonly nodeAfter: Node | null;
    readonly nodeBefore: Node | null;
    readonly offset: number;
    readonly parent: Node | DocumentFragment;
    readonly root: Node | DocumentFragment;

    constructor(parent: Node | DocumentFragment, offset: number | number[]);
    compareWith(otherPosition: Position): PositionRelation;
    getAncestors(): Array<Node | DocumentFragment>;
    getCommonAncestor(position: Position): Node | DocumentFragment | null;
    getLastMatchingPosition(
        skip: (value: TreeWalkerValue) => boolean,
        options?: {
            boundaries?: Range | undefined;
            startPosition: Position;
            direction?: TreeWalkerDirection | undefined;
            singleCharacters?: boolean | undefined;
            shallow?: boolean | undefined;
            ignoreElementEnd?: boolean | undefined;
        },
    ): Position;
    getShiftedBy(shift: number): Position;
    getWalker(options?: {
        boundaries?: Range | undefined;
        singleCharacters?: boolean | undefined;
        shallow?: boolean | undefined;
        ignoreElementEnd?: boolean | undefined;
    }): TreeWalker;
    is(type: string): boolean;
    isAfter(otherPosition: Position): boolean;
    isBefore(otherPosition: Position): boolean;
    isEqual(otherPosition: Position): boolean;
}
