import AttributeElement from "./attributeelement";
import ContainerElement from "./containerelement";
import Document from "./document";
import DocumentSelection from "./documentselection";
import EditableElement from "./editableelement";
import Element from "./element";
import EmptyElement from "./emptyelement";
import Node from "./node";
import Position from "./position";
import Range from "./range";
import RawElement from "./rawelement";
import RootEditableElement from "./rooteditableelement";
import Selection from "./selection";
import Text from "./text";
import TextProxy from "./textproxy";
import UIElement from "./uielement";

import { Item } from "./item";

export default class DocumentFragment implements Iterable<Node> {
    readonly childCount: number;
    readonly document: Document;
    readonly isEmpty: boolean;
    readonly parent: null;
    readonly root: this;

    [Symbol.iterator](): Iterator<Node>;
    _appendChild(items: Item | Iterable<Item>): number;
    _insertChild(index: number, items: Item | Iterable<Item>): number;
    _removeChildren(index: number, howMany?: number): Node[];
    getChild(index: number): Node;
    getChildIndex(node: Node): number;
    getChildren(): IterableIterator<Node>;
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
}
