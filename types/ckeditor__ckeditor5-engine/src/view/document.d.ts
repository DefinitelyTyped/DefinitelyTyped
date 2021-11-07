import { Collection } from '@ckeditor/ckeditor5-utils';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import DocumentSelection from './documentselection';
import DowncastWriter from './downcastwriter';
import { BubblingEmitter } from './observer/bubblingemittermixin';
import RootEditableElement from './rooteditableelement';
import { StylesProcessor } from './stylesmap';

export default class Document implements BubblingEmitter, Observable {
    constructor(stylesProcessor: StylesProcessor);
    readonly isComposing: boolean;
    readonly isFocused: boolean;
    isReadOnly: boolean;
    readonly roots: Collection<RootEditableElement>;
    readonly selection: DocumentSelection;
    readonly stylesProcessor: StylesProcessor;
    destroy(): void;
    getRoot(name?: string): RootEditableElement | null;
    registerPostFixer(postFixer: (writer: DowncastWriter) => boolean | void): void;
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

export type ChangeType = 'children' | 'attributes' | 'text';
