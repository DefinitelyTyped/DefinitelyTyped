import { Plugin } from "@ckeditor/ckeditor5-core";

export default class CKFinderUI extends Plugin {
    static pluginName: "CKFinderUI";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CKFinderUI: CKFinderUI;
    }
}
