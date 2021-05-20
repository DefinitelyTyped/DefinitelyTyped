import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import Document from "./document";
import DomConverter from "./domconverter";
import DowncastWriter from "./downcastwriter";
import Element from "./element";
import { Item } from "./item";
import DomEventData from "./observer/domeventdata";
import Observer from "./observer/observer";
import Position from "./position";
import Range from "./range";
import Selection, { Selectable } from "./selection";
import { StylesProcessor } from "./stylesmap";

export default class View implements Emitter, Observable {
    readonly document: Document;
    readonly domConverter: DomConverter;
    readonly domRoots: Map<string, HTMLElement>;
    readonly hasDomSelection: boolean;
    readonly isRenderingInProgress: boolean;

    constructor(stylesProcessor: StylesProcessor);
    addObserver(ObserverClass: typeof Observer): Observer;
    attachDomRoot(domRoot: Element, name?: string): void;
    change(callback: (writer: DowncastWriter) => void): View;
    createPositionAfter(item: Item): Position;
    createPositionAt(itemOrPosition: Item, offset?: number | "end" | "before" | "after"): void;
    createPositionAt(itemOrPosition: Position): void;
    createPositionBefore(item: Item): Position;
    createRange(start: Position, end?: Position): Range;
    createRangeIn(element: Element): Range;
    createRangeOn(item: Item): Range;
    createSelection(
        selectable?: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean; fake?: boolean; label?: string },
    ): Selection;
    destroy(): void;
    detachDomRoot(name: string): void;
    disableObservers(): void;
    enableObservers(): void;
    focus(): void;
    forceRender(): void;
    getDomRoot(name?: string): Element;
    getObserver(ObserverClass: typeof Observer): Observer | undefined;
    scrollToTheSelection(): void;

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;

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
