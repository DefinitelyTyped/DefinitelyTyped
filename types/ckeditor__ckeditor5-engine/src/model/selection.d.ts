import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import DocumentFragment from './documentfragment';
import DocumentSelection from './documentselection';
import Element from './element';
import LivePosition from './liveposition';
import LiveRange from './liverange';
import { Marker } from './markercollection';
import Node from './node';
import Position from './position';
import Range from './range';
import RootElement from './rootelement';
import Text from './text';
import TextProxy from './textproxy';
import { Item } from './item';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';

export type Selectable =
    | Selection
    | DocumentSelection
    | Position
    | LivePosition
    | Range
    | LiveRange
    | Node
    | Element
    | RootElement
    | Text
    | null
    | Iterable<Range>;
export default class Selection implements Emitter {
    constructor(
        selectable?: Selectable | null,
        placeOrOffset?: number | 'before' | 'end' | 'after' | 'on' | 'in',
        options?: { backward?: boolean | undefined },
    );

    readonly anchor: Position | null;
    readonly focus: Position | null;
    readonly isBackward: boolean;
    readonly isCollapsed: boolean;
    readonly rangeCount: number;

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
    is(type: 'position' | 'model:position'): this is Position | LivePosition;
    is(type: 'livePosition' | 'model:livePosition'): this is LivePosition;
    is(type: 'range' | 'model:range'): this is Range | LiveRange;
    is(type: 'liveRange' | 'model:liveRange'): this is LiveRange;
    is(type: 'marker' | 'model:marker'): this is Marker;
    is(type: '$textProxy' | 'model:$textProxy' | 'textProxy' | 'model:textProxy'): this is TextProxy;
    is(type: 'documentFragment' | 'model:documentFragment'): this is DocumentFragment;
    is(type: 'selection' | 'model:selection'): this is Selection | DocumentSelection;
    is(type: 'documentSelection' | 'model:documentSelection'): this is DocumentSelection;
    is(type: 'node' | 'model:node'): this is Node | Element | Text | RootElement;
    is(type: '$text' | 'model:$text' | 'text' | 'model:text'): this is Text;
    is(type: 'element' | 'model:element'): this is Element | RootElement;
    is(type: 'rootElement' | 'model:rootElement'): this is RootElement;
    is<K extends string>(type: 'element' | 'model:element', name: K): this is (Element | RootElement) & { name: K };
    is<K extends string>(type: 'rootElement' | 'model:rootElement', name: K): this is RootElement & { name: K };
    is(type: string, name?: string): boolean;
    isEqual(otherSelection: Selection | DocumentSelection): boolean;
    removeAttribute(key: string): void;
    setAttribute(key: string, value: string | boolean | number): void;
    setFocus(itemOrPosition: Position): void;
    setFocus(itemOrPosition: Item, offset?: number | 'end' | 'before' | 'after'): void;
    setTo(
        selectable: Selectable,
        placeOrOffset?: number | 'before' | 'end' | 'after' | 'on' | 'in',
        options?: { backward?: boolean | undefined },
    ): void;

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
