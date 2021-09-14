import { Plugin } from "@ckeditor/ckeditor5-core";

export default class Autoformat extends Plugin {
    static readonly pluginName: "Autoformat";
    afterInit(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Autoformat: Autoformat;
    }
}
