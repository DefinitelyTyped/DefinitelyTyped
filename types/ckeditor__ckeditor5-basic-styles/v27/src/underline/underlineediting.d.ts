import { Plugin } from "@ckeditor/ckeditor5-core";

export default class UnderlineEditing extends Plugin {
    static readonly pluginName: "UnderlineEditing";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        UnderlineEditing: UnderlineEditing;
    }
}
