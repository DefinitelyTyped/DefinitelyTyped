import { Plugin } from "@ckeditor/ckeditor5-core";

export default class BoldEditing extends Plugin {
    static readonly pluginName: "BoldEditing";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        BoldEditing: BoldEditing;
    }
}
