import { Plugin } from "@ckeditor/ckeditor5-core";

export default class UnderlineUI extends Plugin {
    static readonly pluginName: "UnderlineUI";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        UnderlineUI: UnderlineUI;
    }
}
