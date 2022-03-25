import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import Document from './document';
import DomConverter from './domconverter';
import DowncastWriter from './downcastwriter';
import Element from './element';
import { Item } from './item';
import Observer from './observer/observer';
import Position from './position';
import Range from './range';
import Selection, { Selectable } from './selection';
import { StylesProcessor } from './stylesmap';

// tslint:disable-next-line:no-empty-interface
export interface Observers {}

export default class View implements Observable {
    readonly document: Document;
    readonly domConverter: DomConverter;
    readonly domRoots: Map<string, HTMLElement>;
    readonly hasDomSelection: boolean;
    readonly isRenderingInProgress: boolean;

    constructor(stylesProcessor: StylesProcessor);
    addObserver<T extends Observer>(key: new (view: View) => T): T;
    attachDomRoot(domRoot: Element, name?: string): void;
    change(callback: (writer: DowncastWriter) => void): View;
    createPositionAfter(item: Item): Position;
    createPositionAt(itemOrPosition: Item, offset?: number | 'end' | 'before' | 'after'): void;
    createPositionAt(itemOrPosition: Position): void;
    createPositionBefore(item: Item): Position;
    createRange(start: Position, end?: Position): Range;
    createRangeIn(element: Element): Range;
    createRangeOn(item: Item): Range;
    createSelection(
        selectable?: Selectable,
        placeOrOffset?: number | 'before' | 'end' | 'after' | 'on' | 'in',
        options?: { backward?: boolean | undefined; fake?: boolean | undefined; label?: string | undefined },
    ): Selection;
    destroy(): void;
    detachDomRoot(name: string): void;
    disableObservers(): void;
    enableObservers(): void;
    focus(): void;
    forceRender(): void;
    getDomRoot(name?: string): Element;
    getObserver<T extends Observer>(key: new (view: View) => T): T;

    scrollToTheSelection(): void;

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
