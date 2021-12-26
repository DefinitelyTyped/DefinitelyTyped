import { Plugin } from "@ckeditor/ckeditor5-core";

export default class CodeUI extends Plugin {
    static readonly pluginName: "CodeUI";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CodeUI: CodeUI;
    }
}
