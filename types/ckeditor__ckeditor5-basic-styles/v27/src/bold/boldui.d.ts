import { Plugin } from "@ckeditor/ckeditor5-core";

export default class BoldUI extends Plugin {
    static readonly pluginName: "BoldUI";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        BoldUI: BoldUI;
    }
}
