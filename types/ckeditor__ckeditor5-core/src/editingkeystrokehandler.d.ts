import KeystrokeHandler from "@ckeditor/ckeditor5-utils/src/keystrokehandler";
import Editor from "./editor/editor";

export default class EditingKeystrokeHandler extends KeystrokeHandler {
    readonly editor: Editor;

    constructor(editor: Editor);
}
