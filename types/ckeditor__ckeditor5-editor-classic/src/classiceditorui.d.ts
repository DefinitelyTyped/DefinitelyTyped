import { Editor, EditorUI } from "@ckeditor/ckeditor5-core";
import { EditorUIView } from "@ckeditor/ckeditor5-ui";
import ClassicEditorUIView from "./classiceditoruiview";

export default class ClassicEditorUI extends EditorUI {
    view: ClassicEditorUIView;
    constructor(editor: Editor, view: EditorUIView);
    init(replacementElement?: HTMLElement | null): void;
}
