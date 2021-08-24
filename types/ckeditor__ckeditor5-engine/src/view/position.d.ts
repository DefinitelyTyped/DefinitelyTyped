import AttributeElement from "./attributeelement";
import ContainerElement from "./containerelement";
import DocumentFragment from "./documentfragment";
import DocumentSelection from "./documentselection";
import EditableElement from "./editableelement";
import Element from "./element";
import EmptyElement from "./emptyelement";
import Node from "./node";
import Range from "./range";
import RawElement from "./rawelement";
import RootEditableElement from "./rooteditableelement";
import Selection from "./selection";
import Text from "./text";
import TextProxy from "./textproxy";
import UIElement from "./uielement";
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
    is(
        type: "node" | "view:node",
    ): this is
        | Node
        | Element
        | Text
        | ContainerElement
        | EditableElement
        | RootEditableElement
        | AttributeElement
        | UIElement
        | RawElement
        | EmptyElement;
    is(type: "documentFragment" | "view:documentFragment"): this is DocumentFragment;
    is(type: "position" | "view:position"): this is Position;
    is(type: "range" | "view:range"): this is Range;
    is(type: "selection" | "view:selection"): this is Selection | DocumentSelection;
    is(type: "documentSelection" | "view:documentSelection"): this is DocumentSelection;
    is(
        type: "element" | "view:element",
        name?: string,
    ): this is
        | Element
        | ContainerElement
        | EditableElement
        | RootEditableElement
        | AttributeElement
        | UIElement
        | RawElement
        | EmptyElement;
    is(type: "attributeElement" | "view:attributeElement", name?: string): this is AttributeElement;
    is(
        type: "containerElement" | "view:containerElement",
        name?: string,
    ): this is ContainerElement | EditableElement | RootEditableElement;
    is(
        type: "editableElement" | "view:editableElement",
        name?: string,
    ): this is EditableElement | RootEditableElement;
    is(
        type: "rootEditableElement" | "view:rootEditableElement",
        name?: string,
    ): this is RootEditableElement;
    is(type: "uiElement" | "view:uiElement", name?: string): this is UIElement;
    is(type: "rawElement" | "view:rawElement", name?: string): this is RawElement;
    is(type: "emptyElement" | "view:emptyElement", name?: string): this is EmptyElement;
    is(type: "$textProxy" | "view:$textProxy" | "textProxy" | "view:textProxy"): this is TextProxy;
    is(type: "$text" | "view:$text" | "text" | "view:text"): this is Text;
    is(type: string, name?: string): boolean;
    isAfter(otherPosition: Position): boolean;
    isBefore(otherPosition: Position): boolean;
    isEqual(otherPosition: Position): boolean;
}
