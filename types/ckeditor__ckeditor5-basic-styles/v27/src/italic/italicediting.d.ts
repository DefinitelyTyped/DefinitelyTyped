import { Plugin } from "@ckeditor/ckeditor5-core";

export default class ItalicEditing extends Plugin {
    static readonly pluginName: "ItalicEditing";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ItalicEditing: ItalicEditing;
    }
}
