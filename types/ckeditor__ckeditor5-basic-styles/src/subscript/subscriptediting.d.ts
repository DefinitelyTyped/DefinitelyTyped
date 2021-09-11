import { Plugin } from "@ckeditor/ckeditor5-core";

export default class SubscriptEditing extends Plugin {
    static readonly pluginName: "SubscriptEditing";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SubscriptEditing: SubscriptEditing;
    }
}
