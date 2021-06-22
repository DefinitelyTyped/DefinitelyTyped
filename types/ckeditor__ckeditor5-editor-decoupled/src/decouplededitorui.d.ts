import { Editor, EditorUI } from '@ckeditor/ckeditor5-core';
import DecoupledEditorUIView from './decouplededitoruiview';

export default class DecoupledEditorUI extends EditorUI {
    readonly view: DecoupledEditorUIView;
    constructor(editor: Editor, view: DecoupledEditorUIView);
    init(): void;
    destroy(): void;
}
