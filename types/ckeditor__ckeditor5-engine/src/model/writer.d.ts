import Text from './text';
import Batch from './batch';
import DocumentFragment from './documentfragment';
import Element from './element';
import { Item } from './item';
import { Marker } from './markercollection';
import Model from './model';
import Position, { PositionStickiness } from './position';
import Range from './range';
import Selection, { Selectable } from './selection';
import Node from './node';

export default class Writer {
    readonly batch: Batch;
    readonly model: Model;

    addMarker(
        name: string,
        options?: { usingOperation?: boolean | undefined; range: Range; affectsData?: boolean | undefined },
    ): Marker;
    append(item: Item | DocumentFragment, parent: Element | DocumentFragment): void;
    appendElement(
        name: string,
        attributes: Record<string, string | number | boolean>,
        parent: Element | DocumentFragment,
    ): void;
    appendElement(name: string, parent: Element | DocumentFragment): void;
    appendText(
        text: string,
        attributes: Record<string, string | number | boolean>,
        parent: Element | DocumentFragment,
    ): void;
    appendText(text: string, parent: Element | DocumentFragment): void;
    clearAttributes(itemOrRange: Item | Range): void;
    cloneElement(element: Element, deep?: boolean): Element;
    createDocumentFragment(): DocumentFragment;
    createElement(name: string, attributes?: Record<string, string | number | boolean>): Element;
    createPositionAfter(item: Item): Position;
    createPositionAt(itemOrPosition: DocumentFragment | Item, offset?: number | 'end' | 'before' | 'after'): Position;
    createPositionAt(itemOrPosition: Position): Position;
    createPositionBefore(item: Item): Position;
    createPositionFromPath(root: Element | DocumentFragment, path: number[], stickiness?: PositionStickiness): Position;
    createRange(start: Position, end?: Position): Range;
    createRangeIn(element: Element): Range;
    createRangeOn(element: Element): Range;
    createSelection(
        selectable: Selectable,
        placeOrOffset?: number | 'before' | 'end' | 'after' | 'on' | 'in',
        options?: { backward?: boolean | undefined },
    ): Selection;
    createText(data: string, attributes?: Record<string, string | number | boolean>): Text;
    insert(
        item: Item | DocumentFragment,
        itemOrPosition: Item | Position | null,
        offset?: number | 'end' | 'before' | 'after',
    ): void;
    insertElement(
        name: string,
        attributes?: Record<string, string | number | boolean>,
        itemOrPosition?: Item | Position | null,
        offset?: number | 'end' | 'before' | 'after',
    ): void;
    insertElement(
        name: string,
        itemOrPosition: Item | Position | null,
        offset?: number | 'end' | 'before' | 'after',
    ): void;
    insertText(
        data: string,
        attributes?: Record<string, string | number | boolean>,
        itemOrPosition?: Item | Position | null,
        offset?: number | 'end' | 'before' | 'after',
    ): void;
    insertText(
        data: string,
        itemOrPosition?: Item | Position | null,
        offset?: number | 'end' | 'before' | 'after',
    ): void;
    insertText(data: string, itemOrPosition: Item | Position, offset?: number | 'end' | 'before' | 'after'): void;
    merge(position: Position): void;
    move(range: Range, itemOrPosition: Item | Position, offset?: number | 'end' | 'before' | 'after'): void;
    overrideSelectionGravity(): string;
    remove(itemOrRange: Item | Range): void;
    removeAttribute(key: string, itemOrRange: Item | Range): void;
    removeMarker(markerOrName: Marker | string): void;
    removeSelectionAttribute(keyOrIterableOfKeys: string | string[]): void;
    rename(element: Element, newName: string): void;
    restoreSelectionGravity(uid: string): void;
    setAttribute(
        key: string,
        value: string | number | boolean | Record<string, string | number | boolean>,
        itemOrRange: Item | Range,
    ): void;
    setAttributes(
        attributes: Record<string, string | number | boolean | Record<string, string | number | boolean>>,
        itemOrRange: Item | Range,
    ): void;
    setSelection(
        selectable: Selectable,
        placeOrOffset?: number | 'before' | 'end' | 'after' | 'on' | 'in',
        options?: { backward?: boolean | undefined },
    ): void;
    setSelectionAttribute(
        keyOrObjectOrIterable: Record<string, string | number | boolean> | Array<[string, string | number | boolean]>,
    ): void;
    setSelectionAttribute(keyOrObjectOrIterable: string, value: string | number | boolean): void;
    setSelectionFocus(itemOrPosition: Position): void;
    setSelectionFocus(itemOrPosition: Item, offset?: number | 'end' | 'before' | 'after'): void;
    split(position: Position, limitElement?: Node): { position: Position; range: Range };
    unwrap(element: Element): void;
    updateMarker(
        markerOrName: string | Marker,
        options?: {
            range?: Range | undefined;
            usingOperation?: boolean | undefined;
            affectsData?: boolean | undefined;
        },
    ): void;
    wrap(range: Range, elementOrString: Element | string): void;
}
