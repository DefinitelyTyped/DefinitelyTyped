import { Plugin } from "@ckeditor/ckeditor5-core";
import { TwoStepCaretMovement } from "@ckeditor/ckeditor5-typing";

export default class CodeEditing extends Plugin {
    static readonly pluginName: "CodeEditing";
    static readonly requires: [typeof TwoStepCaretMovement];
    init(): void;
}
