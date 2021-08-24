import AttributeElement from "./attributeelement";
import ContainerElement from "./containerelement";
import Document from "./document";
import DocumentFragment from "./documentfragment";
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
import UIElement from "./uielement";

export default class TextProxy {
    readonly data: string;
    readonly document: Document | null;
    readonly isPartial: boolean;
    readonly offsetInText: number;
    readonly offsetSize: number;
    readonly parent: Element | DocumentFragment | null;
    readonly root: Node | DocumentFragment;
    readonly textNode: Text;

    protected constructor(textNode: Text, offsetInText: number, length: number);

    getAncestors(options?: {
        includeSelf?: boolean | undefined;
        parentFirst?: boolean | undefined;
    }): Array<Element | DocumentFragment>;
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
