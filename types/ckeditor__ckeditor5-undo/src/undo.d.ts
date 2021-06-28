import { Plugin } from "@ckeditor/ckeditor5-core";
import UndoEditing from "./undoediting";
import UndoUI from "./undoui";

export default class Undo extends Plugin {
    static readonly requires: [typeof UndoEditing, typeof UndoUI];
    static readonly pluginName: "Undo";
}
