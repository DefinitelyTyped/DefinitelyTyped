import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
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

// tslint:disable-next-line:no-empty-interface
export default interface Model extends Observable {}

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
    createSelection(selectable?: Selectable | Selectable[], options?: { backward?: boolean | undefined }): Selection;
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
}
