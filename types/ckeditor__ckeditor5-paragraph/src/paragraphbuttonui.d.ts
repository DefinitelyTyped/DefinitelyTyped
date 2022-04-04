import { Plugin } from '@ckeditor/ckeditor5-core';
import { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';

/**
 * This plugin defines the `'paragraph'` button. It can be used together with
 * {@link module:heading/headingbuttonsui~HeadingButtonsUI} to replace the standard heading dropdown.
 *
 * This plugin is not loaded automatically by the {@link module:paragraph/paragraph~Paragraph} plugin. It must
 * be added manually.
 *
 *    ClassicEditor
 *      .create( {
 *        plugins: [ ..., Heading, Paragraph, HeadingButtonsUI, ParagraphButtonUI ]
 *        toolbar: [ 'paragraph', 'heading1', 'heading2', 'heading3' ]
 *      } )
 *      .then( ... )
 *      .catch( ... );
 */
export default class ParagraphButtonUI extends Plugin {
    constructor(editor: EditorWithUI);
    readonly editor: EditorWithUI;
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ParagraphButtonUI: ParagraphButtonUI;
    }
}
