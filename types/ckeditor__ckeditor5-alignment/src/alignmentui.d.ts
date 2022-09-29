import { Plugin } from '@ckeditor/ckeditor5-core';
import { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';

/**
 * The default alignment UI plugin.
 *
 * It introduces the `'alignment:left'`, `'alignment:right'`, `'alignment:center'` and `'alignment:justify'` buttons
 * and the `'alignment'` dropdown.
 */
export default class AlignmentUI extends Plugin {
    static readonly pluginName: 'AlignmentUI';

    /**
     * Returns the localized option titles provided by the plugin.
     *
     * The following localized titles corresponding with
     * {@link module:alignment/alignment~AlignmentConfig#options} are available:
     *
     * * `'left'`,
     * * `'right'`,
     * * `'center'`,
     * * `'justify'`.
     */
    readonly localizedOptionTitles: {
        left: string;
        right: string;
        center: string;
        justify: string;
    };

    readonly editor: EditorWithUI;

    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        AlignmentUI: AlignmentUI;
    }
}
