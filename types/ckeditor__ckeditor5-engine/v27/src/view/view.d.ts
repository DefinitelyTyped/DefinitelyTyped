import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import Document from "./document";
import DomConverter from "./domconverter";
import DowncastWriter from "./downcastwriter";
import Element from "./element";
import { Item } from "./item";
import Observer from "./observer/observer";
import Position from "./position";
import Range from "./range";
import Selection, { Selectable } from "./selection";
import { StylesProcessor } from "./stylesmap";

export default class View implements Observable {
    readonly document: Document;
    readonly domConverter: DomConverter;
    readonly domRoots: Map<string, HTMLElement>;
    hasDomSelection: boolean;
    isRenderingInProgress: boolean;

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
        options?: { backward?: boolean | undefined; fake?: boolean | undefined; label?: string | undefined },
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

    stopListening<S extends Emitter, N extends string>(
        emitter?: S,
        event?: N,
        callback?: (info: EventInfo<N, S>, ...data: unknown[]) => void,
    ): void;
    on<N extends string>(
        event: N,
        callback: (info: EventInfo<N>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<N extends string>(
        event: N,
        callback: (info: EventInfo<N>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<N extends string>(event: N, callback?: (info: EventInfo<N>, ...data: unknown[]) => void): void;
    listenTo<S extends Emitter, N extends string>(
        emitter: S,
        event: N,
        callback: (info: EventInfo<N, S>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}
