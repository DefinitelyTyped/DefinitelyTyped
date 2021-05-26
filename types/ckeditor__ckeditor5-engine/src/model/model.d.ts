import Batch from "./batch";
import Document from "./document";
import Operation from "./operation/operation";
import { Item } from "./item";
import Position, { PositionStickiness } from "./position";
import MarkerCollection from "./markercollection";
import Element from "./element";
import DocumentFragment from "./documentfragment";
import Range from "./range";
import Selection, { Selectable } from "./selection";
import Writer from "./writer";
import Schema from "./schema";
import { Emitter, EmitterMixinDelegateChain } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import EventInfo from "@ckeditor/ckeditor5-utils/src/eventinfo";
import { DomEventData } from "@ckeditor/ckeditor5-engine";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";

export default class Model implements Emitter, Observable {
    readonly document: Document;
    readonly markers: MarkerCollection;
    readonly schema: Schema;

    applyOperation(operation: Operation): void;
    change<T>(callback: (writer: Writer) => T): T;
    createBatch(type?: "transparent" | "default"): Batch;
    createOperationFromJSON(arg: Record<string, unknown>): Operation;
    createPositionAfter(item: Item): Position;
    createPositionAt(itemOrPosition: Item, offset?: number | "end" | "before" | "after"): Position;
    createPositionAt(itemOrPosition: Position): Position;
    createPositionBefore(item: Item): Position;
    createPositionFromPath(root: Element | DocumentFragment, path: number[], stickiness?: PositionStickiness): Position;
    createRange(start: Position, end?: Position): Range;
    createRangeIn(element: Element): Range;
    createRangeOn(item: Item): Range;
    createSelection(
        selectable?: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean },
    ): Selection;
    deleteContent(
        selection: Selection,
        options?: {
            leaveUnmerged?: boolean;
            doNotResetEntireContent?: boolean;
            doNotAutoparagraph?: boolean;
            direction?: "forward" | "backward";
        },
    ): void;
    destroy(): void;
    enqueueChange(batchOrType: Batch | "transparent" | "default", callback: (writer: Writer) => void): void;
    getSelectedContent(selection: Selection): DocumentFragment;
    hasContent(
        rangeOrElement: Range | Element,
        options?: { ignoreWhitespaces?: boolean; ignoreMarkers?: boolean },
    ): boolean;
    insertContent(
        content: DocumentFragment | Item,
        selectable?: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
    ): Range;
    modifySelection(
        selection: Selection,
        options?: { direction?: "forward" | "backward"; unit?: "character" | "codePoint" | "word" },
    ): void;

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
