import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import FindAndReplace from './findandreplace';
import FindAndReplaceFormView from './ui/findandreplaceformview';
/**
 * The default find and replace UI. It introduces:
 *
 * * The `'Find and replace'` dropdown button.
 *
 * It registers the `'findAndReplace'` UI button in the editor's {@link module:ui/componentfactory~ComponentFactory component factory}.
 * that uses the {@link module:find-and-replace/findandreplace~FindAndReplace FindAndReplace} plugin API.
 *
 * It emits events depending on user search/replace intents.
 */
export default class FindAndReplaceUI extends Plugin {
    static readonly pluginName: 'FindAndReplaceUI';

    searchText: string | undefined;
    replaceText: string | undefined;
    isSearching: boolean;
    matchCount: null | number;
    highlightOffset: null | number;
    formView: FindAndReplaceFormView | null;
    findAndReplacePlugin: FindAndReplace;

    constructor(editor: Editor);

    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FindAndReplaceUI: FindAndReplaceUI;
    }
}
