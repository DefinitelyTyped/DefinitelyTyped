import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import Node from "./node";
import Position from "./position";
import Range from "./range";
import DocumentSelection from "./documentselection";
import Element from "./element";
import { Item } from "./item";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import DomEventData from "../view/observer/domeventdata";

export type Selectable = Selection | DocumentSelection | Position | Range | Node | Iterable<Range> | null;

export default class Selection implements Emitter {
    readonly anchor: Position | null;
    readonly focus: Position | null;
    readonly isBackward: boolean;
    readonly isCollapsed: boolean;
    readonly rangeCount: number;

    constructor(
        selectable: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean },
    );
    containsEntireContent(element: Element): boolean;
    getAttribute(key: string): string | boolean | number | undefined;
    getAttributeKeys(): IterableIterator<string>;
    getAttributes(): IterableIterator<[string, string | boolean | number]>;
    getFirstPosition(): Position | null;
    getFirstRange(): Range | null;
    getLastPosition(): Position | null;
    getLastRange(): Range | null;
    getRanges(): Generator<Range>;
    getSelectedBlocks(): Generator<Element>;
    getSelectedElement(): Element | null;
    hasAttribute(key: string): boolean;
    is(type: string): boolean;
    isEqual(otherSelection: Selection): boolean;
    removeAttribute(key: string): void;
    setAttribute(key: string, value: string | boolean | number): void;
    setFocus(itemOrPosition: Position): void;
    setFocus(itemOrPosition: Item, offset?: number | "end" | "before" | "after"): void;
    setTo(
        selectable: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean },
    ): void;

    on: (
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ) => void;
    once(
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ): void;
    off(event: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority?: PriorityString | number },
    ): void;
    stopListening(emitter?: Emitter, event?: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}
