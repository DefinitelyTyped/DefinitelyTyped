import { Plugin } from "@ckeditor/ckeditor5-core";

export default class SuperscriptEditing extends Plugin {
    static readonly pluginName: "SuperscriptEditing";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SuperscriptEditing: SuperscriptEditing;
    }
}
