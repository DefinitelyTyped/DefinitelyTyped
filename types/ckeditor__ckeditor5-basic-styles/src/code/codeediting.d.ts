import { Plugin } from "@ckeditor/ckeditor5-core";

// TODO: import {TwoStepCaretMovement} from "@ckeditor/ckeditor5-typing";
declare class TwoStepCaretMovement extends Plugin {}

export default class CodeEditing extends Plugin {
    static readonly pluginName: "CodeEditing";
    static readonly requires: [typeof TwoStepCaretMovement];
    init(): void;
}

export {};
