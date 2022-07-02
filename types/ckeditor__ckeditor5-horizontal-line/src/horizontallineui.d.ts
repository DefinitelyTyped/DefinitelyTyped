import { Plugin } from '@ckeditor/ckeditor5-core';
import { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';

/**
 * The horizontal line UI plugin.
 */
export default class HorizontalLineUI extends Plugin {
    static readonly pluginName: 'HorizontalLineUI';

    editor: EditorWithUI;

    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        HorizontalLineUI: HorizontalLineUI;
    }
}
