import { Plugin } from "@ckeditor/ckeditor5-core";

export default class ItalicUI extends Plugin {
    static readonly pluginName: "ItalicUI";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ItalicUI: ItalicUI;
    }
}
