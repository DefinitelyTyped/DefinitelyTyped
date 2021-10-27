import { Plugin } from "@ckeditor/ckeditor5-core";

export default class HeadingUI extends Plugin {
    static readonly pluginName: "HeadingUI";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        HeadingUI: HeadingUI;
    }
}
