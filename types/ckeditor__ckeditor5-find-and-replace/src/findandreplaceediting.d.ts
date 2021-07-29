import { Plugin } from '@ckeditor/ckeditor5-core';
import { Model } from '@ckeditor/ckeditor5-engine';
import { Marker } from '@ckeditor/ckeditor5-engine/src/model/markercollection';
import { Collection } from '@ckeditor/ckeditor5-utils';
import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

/**
 * The object storing find & replace plugin state in a given editor instance.
 *
 */
export class FindAndReplaceState implements Observable {
    results: Collection<{ id: string; label: string; marker: Marker }>;
    highlightedResult: null | { id: string; label: string; marker: Marker };
    searchText: string;
    replaceText: string;
    matchCase: boolean;
    matchWholeWords: boolean;
    constructor(model: Model);
    clear(model: Model): void;

    set(option: Record<string, string>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;

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
    stopListening<S extends Emitter, N extends string>(
        emitter?: S,
        event?: N,
        callback?: (info: EventInfo<N, S>, ...data: unknown[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

/**
 * Implements the editing part for find and replace plugin. For example conversion, commands etc.
 */
export default class FindAndReplaceEditing extends Plugin {
    static readonly pluginName: 'FindAndReplaceEditing';
    init(): void;
    /**
     * An object storing the find and replace state within a given editor instance.
     */
    state: FindAndReplaceState;
    activeResults: null | FindAndReplaceState['results'];
    /**
     * Initiate a search.
     */
    find(
        callbackOrText:
            | string
            | ((
                  str: string,
                  options?: { matchCase?: boolean; wholeWords?: boolean },
              ) => (query: { text: string }) => Array<{ label: [string]; start: number; end: number }>),
    ): FindAndReplaceEditing['activeResults'];
    /**
     * Stops active results from updating, and clears out the results.
     */
    stop(): void;
}
