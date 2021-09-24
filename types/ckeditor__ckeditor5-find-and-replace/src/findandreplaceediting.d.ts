import { Plugin } from '@ckeditor/ckeditor5-core';
import { Model } from '@ckeditor/ckeditor5-engine';
import { Marker } from '@ckeditor/ckeditor5-engine/src/model/markercollection';
import { Collection } from '@ckeditor/ckeditor5-utils';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';

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

    set(option: Record<string, string>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;

    clear(model: Model): void;
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

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FindAndReplaceEditing: FindAndReplaceEditing;
    }
}
