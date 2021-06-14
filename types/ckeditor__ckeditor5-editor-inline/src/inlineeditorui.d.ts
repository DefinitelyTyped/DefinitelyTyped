import { Editor, EditorUI } from '@ckeditor/ckeditor5-core';
import { EditorUIView } from '@ckeditor/ckeditor5-ui';
import InlineEditorUIView from './inlineeditoruiview';

export default class InlineEditorUI extends EditorUI {
    readonly view: InlineEditorUIView;
    constructor(editor: Editor, view: EditorUIView);
    init(): void;
    destroy(): void;
}
