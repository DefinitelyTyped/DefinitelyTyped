import { Model } from '@ckeditor/ckeditor5-engine';
import { Marker } from '@ckeditor/ckeditor5-engine/src/model/markercollection';
import { Collection } from '@ckeditor/ckeditor5-utils';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

export interface Result {
    id: string;
    label: string;
    marker: Marker;
}
/**
 * The object storing find & replace plugin state in a given editor instance.
 *
 */
export default class FindAndReplaceState implements Observable {
    constructor(model: Model);
    get results(): Collection<Result>;
    protected set results(value: Collection<Result>);
    get highlightedResult(): null | Result;
    protected set highlightedResult(value: null | Result);
    get searchText(): string;
    protected set searchText(value: string);
    get replaceText(): string;
    protected set replaceText(value: string);
    get matchCase(): boolean;
    protected set matchCase(value: boolean);
    get matchWholeWords(): boolean;
    protected set matchWholeWords(value: boolean);
    clear(model: Model): void;

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
