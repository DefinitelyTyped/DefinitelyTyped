import { Plugin } from "@ckeditor/ckeditor5-core";

export default class StrikethroughEditing extends Plugin {
    static readonly pluginName: "StrikethroughEditing";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        StrikethroughEditing: StrikethroughEditing;
    }
}
