import { Plugin } from "@ckeditor/ckeditor5-core";

export default class TwoStepCaretMovement extends Plugin {
    static readonly pluginName: "TwoStepCaretMovement";
    init(): void;
    registerAttribute(attribute: string): void;
}
