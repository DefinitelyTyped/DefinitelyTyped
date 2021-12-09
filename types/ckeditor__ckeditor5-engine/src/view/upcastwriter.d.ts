import Document from "./document";
import DocumentFragment from "./documentfragment";
import Element from "./element";
import { Item } from "./item";
import Node from "./node";
import Position from "./position";
import Selection, { Selectable } from "./selection";
import Text from "./text";

export default class UpcastWriter {
    readonly document: Document;

    constructor(document: Document);
    addClass(className: string | string[], element: Element): void;
    appendChild(items: Item | Iterable<Item>, element: Element): number;
    clone(element: Element, deep?: boolean): Element;
    createDocumentFragment(children?: Node | Iterable<Node>): DocumentFragment;
    createElement(
        name: string,
        attrs?: Record<string, string> | Array<[string, string]>,
        children?: Node | Iterable<Node>,
    ): Element;
    createPositionAfter(item: Item): Position;
    createPositionAt(itemOrPosition: Item, offset?: number | "end" | "before" | "after"): Position;
    createPositionAt(itemOrPosition: Position): Position;
    createPositionBefore(item: Item): Position;
    createRange(start: Position, end?: Position): Range;
    createRangeIn(element: Element): Range;
    createRangeOn(item: Item): Range;
    createSelection(
        selectable?: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean | undefined; fake?: boolean | undefined; label?: string | undefined },
    ): Selection;
    createText(data: string): Text;
    insertChild(index: number, items: Item | Iterable<Item>, element: Element | DocumentFragment): number;
    remove(element: Element): Node[];
    removeAttribute(key: string, element: Element): void;
    removeChildren(index: number, howMany: number, element: Element): Node[];
    removeClass(className: string | string[], element: Element): void;
    removeCustomProperty(key: string, element: Element): boolean;
    removeStyle(property: string | string[], element: Element): void;
    rename(newName: string, element: Element): Element | null;
    replace(oldElement: Element, newElement: Element): boolean;
    setAttribute(key: string, value: string, element: Element): void;
    setCustomProperty(key: string, value: any, element: Element): void;
    setStyle(property: string, value: string, element: Element): void;
    setStyle(property: Record<string, string>, element: Element): void;
    unwrapElement(element: Element): void;
}
