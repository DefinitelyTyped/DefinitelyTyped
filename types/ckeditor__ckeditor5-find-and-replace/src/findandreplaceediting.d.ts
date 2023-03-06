import { Plugin } from '@ckeditor/ckeditor5-core';
import FindAndReplaceState from './findandreplacestate';

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
    private _activeResults: null | FindAndReplaceState['results'];
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
    ): FindAndReplaceEditing['_activeResults'];
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
