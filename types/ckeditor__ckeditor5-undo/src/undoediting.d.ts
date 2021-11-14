import { Plugin } from "@ckeditor/ckeditor5-core";

export default class UndoEditing extends Plugin {
    static readonly pluginName: "UndoEditing";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        UndoEditing: UndoEditing;
    }
}
