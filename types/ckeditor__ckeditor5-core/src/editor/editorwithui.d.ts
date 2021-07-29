import Editor from "./editor";
import EditorUI from "./editorui";

export interface EditorWithUI extends Editor {
    readonly ui: EditorUI;
}
