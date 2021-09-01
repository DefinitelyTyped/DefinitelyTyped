import { Plugin } from "@ckeditor/ckeditor5-core";

export default class UndoUI extends Plugin {
    static readonly pluginName: "UndoUI";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        UndoUI: UndoUI;
    }
}
