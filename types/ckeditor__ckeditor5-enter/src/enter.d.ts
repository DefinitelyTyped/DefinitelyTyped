import { Plugin } from "@ckeditor/ckeditor5-core";

export default class Enter extends Plugin {
    static readonly pluginName: "Enter";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Enter: Enter;
    }
}
