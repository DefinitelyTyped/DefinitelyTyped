import { Editor, EditorUI } from '@ckeditor/ckeditor5-core';
import { EditorUIView } from '@ckeditor/ckeditor5-ui';
import InlineEditorUIView from './inlineeditoruiview';

/**
 * The inline editor UI class.
 */
export default class InlineEditorUI extends EditorUI {
    /**
     * Creates an instance of the inline editor UI class.
     */
    constructor(editor: Editor, view: EditorUIView);
    /**
     * The main (top–most) view of the editor UI.
     */
    readonly view: InlineEditorUIView;
    init(): void;
    destroy(): void;
}
