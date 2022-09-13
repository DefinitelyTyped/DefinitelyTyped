import { Editor, EditorUI } from '@ckeditor/ckeditor5-core';
import { EditorUIView } from '@ckeditor/ckeditor5-ui';
import BalloonEditorUIView from './ballooneditoruiview';

export default class BalloonEditorUI extends EditorUI {
    readonly view: BalloonEditorUIView;
    constructor(editor: Editor, view: EditorUIView);
    init(): void;
    destroy(): void;
}
