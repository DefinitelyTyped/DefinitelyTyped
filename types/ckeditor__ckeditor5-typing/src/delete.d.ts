import { Plugin } from "@ckeditor/ckeditor5-core";

export default class Delete extends Plugin {
    static readonly pluginName: "Delete";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Delete: Delete;
    }
}
