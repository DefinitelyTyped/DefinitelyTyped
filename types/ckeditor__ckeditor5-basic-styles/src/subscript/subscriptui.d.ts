import { Plugin } from "@ckeditor/ckeditor5-core";

export default class SubscriptUI extends Plugin {
    static readonly pluginName: "SubscriptUI";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SubscriptUI: SubscriptUI;
    }
}
