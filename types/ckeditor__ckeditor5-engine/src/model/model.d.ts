import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import Batch from './batch';
import Document from './document';
import DocumentFragment from './documentfragment';
import DocumentSelection from './documentselection';
import Element from './element';
import { Item } from './item';
import MarkerCollection from './markercollection';
import Operation from './operation/operation';
import Position, { PositionStickiness } from './position';
import Range from './range';
import Schema from './schema';
import Selection, { Selectable } from './selection';
import Writer from './writer';

export default class Model implements Observable {
    readonly document: Document;
    readonly markers: MarkerCollection;
    readonly schema: Schema;

    applyOperation(operation: Operation): void;
    change<T>(callback: (writer: Writer) => T): T;
    createBatch(type?: ConstructorParameters<typeof Batch>[0]): Batch;
    createOperationFromJSON(arg: Record<string, unknown>): Operation;
    createPositionAfter(item: Item): Position;
    createPositionAt(itemOrPosition: Item, offset?: number | 'end' | 'before' | 'after'): Position;
    createPositionAt(itemOrPosition: Position): Position;
    createPositionBefore(item: Item): Position;
    createPositionFromPath(root: Element | DocumentFragment, path: number[], stickiness?: PositionStickiness): Position;
    createRange(start: Position, end?: Position | null): Range;
    createRangeIn(element: Element): Range;
    createRangeOn(item: Item): Range;
    createSelection(
        selectable?: Selectable | Selectable[],
        options?: { backward?: boolean | undefined },
    ): Selection;
    createSelection(
        selectable?: Selectable | Selectable[],
        placeOrOffset?: number | 'before' | 'end' | 'after' | 'on' | 'in',
        options?: { backward?: boolean | undefined },
    ): Selection;
    deleteContent(
        selection: Selection | DocumentSelection,
        options?: {
            leaveUnmerged?: boolean | undefined;
            doNotResetEntireContent?: boolean | undefined;
            doNotAutoparagraph?: boolean | undefined;
            direction?: 'forward' | 'backward' | undefined;
        },
    ): void;
    destroy(): void;
    enqueueChange(callback: (writer: Writer) => void): void;
    enqueueChange(
        batchOrType: Batch | ConstructorParameters<typeof Batch>[0],
        callback: (writer: Writer) => void,
    ): void;
    getSelectedContent(selection: Selection | DocumentSelection): DocumentFragment;
    hasContent(
        rangeOrElement: Range | Element,
        options?: { ignoreWhitespaces?: boolean | undefined; ignoreMarkers?: boolean | undefined },
    ): boolean;
    insertContent(
        content: DocumentFragment | Item,
        selectable?: Selectable,
        placeOrOffset?: number | 'before' | 'end' | 'after' | 'on' | 'in',
    ): Range;
    modifySelection(
        selection: Selection | DocumentSelection,
        options?: {
            direction?: 'forward' | 'backward' | undefined;
            unit?: 'character' | 'codePoint' | 'word' | undefined;
        },
    ): void;

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<K extends string>(event: K, callback?: (this: this, info: EventInfo<this, K>, ...args: any[]) => void): void;
    listenTo<P extends string, E extends Emitter>(
        emitter: E,
        event: P,
        callback: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<E extends Emitter, P extends string>(
        emitter?: E,
        event?: P,
        callback?: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}
