import { Plugin } from "@ckeditor/ckeditor5-core";

export default class SuperscriptUI extends Plugin {
    static readonly pluginName: "SuperscriptUI";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SuperscriptUI: SuperscriptUI;
    }
}
