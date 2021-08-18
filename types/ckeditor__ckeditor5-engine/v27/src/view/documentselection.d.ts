import AttributeElement from "./attributeelement";
import ContainerElement from "./containerelement";
import DocumentFragment from "./documentfragment";
import EditableElement from "./editableelement";
import Element from "./element";
import EmptyElement from "./emptyelement";
import Node from "./node";
import Position from "./position";
import Range from "./range";
import RawElement from "./rawelement";
import RootEditableElement from "./rooteditableelement";
import Text from "./text";
import TextProxy from "./textproxy";
import UIElement from "./uielement";
import Selection, { Selectable } from "./selection";

export default class DocumentSelection {
    readonly anchor: Position;
    readonly editableElement: EditableElement | null;
    readonly fakeSelectionLabel: string;
    readonly focus: Position;
    readonly isBackward: boolean;
    readonly isCollapsed: boolean;
    readonly isFake: boolean;
    readonly rangeCount: number;

    constructor(
        selectable?: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean | undefined; fake?: boolean | undefined; label?: string | undefined },
    );
    getFirstPosition(): Position | null;
    getFirstRange(): Range | null;
    getLastPosition(): Position | null;
    getLastRange(): Range | null;
    getRanges(): Generator<Range>;
    getSelectedElement(): Element | null;
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
    isEqual(otherSelection: Selection | DocumentSelection): boolean;
    isSimilar(otherSelection: Selection | DocumentSelection): boolean;
}
