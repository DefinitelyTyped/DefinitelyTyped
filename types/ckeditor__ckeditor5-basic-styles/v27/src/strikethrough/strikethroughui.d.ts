import { Plugin } from "@ckeditor/ckeditor5-core";

export default class StrikethroughUI extends Plugin {
    static readonly pluginName: "StrikethroughUI";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        StrikethroughUI: StrikethroughUI;
    }
}
