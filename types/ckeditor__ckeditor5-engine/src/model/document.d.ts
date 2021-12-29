import { Collection } from '@ckeditor/ckeditor5-utils';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import Differ from './differ';
import DocumentSelection from './documentselection';
import Model from './model';
import RootElement from './rootelement';
import Writer from './writer';

export default class Document implements Emitter {
    readonly differ: Differ;
    readonly graveyard: RootElement;
    readonly history: History;
    readonly model: Model;
    readonly roots: Collection<RootElement>;
    readonly selection: DocumentSelection;
    version: number;

    createRoot(elementName?: string, rootName?: string): RootElement;
    destroy(): void;
    getRoot(name?: string): RootElement | null;
    getRootNames(): string[];
    registerPostFixer(postFixer: (writer: Writer) => void): void;
    toJSON(): Omit<this, 'selection' | 'model'> & {
        selection: '[engine.model.DocumentSelection]';
        model: '[engine.model.Model]';
    };

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
