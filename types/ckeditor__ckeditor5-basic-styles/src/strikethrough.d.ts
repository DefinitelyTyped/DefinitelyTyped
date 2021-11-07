import { Plugin } from "@ckeditor/ckeditor5-core";
import StrikethroughEditing from "./strikethrough/strikethroughediting";
import StrikethroughUI from "./strikethrough/strikethroughui";

export default class Strikethrough extends Plugin {
    static readonly requires: [typeof StrikethroughEditing, typeof StrikethroughUI];
    static readonly pluginName: "Strikethrough";
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Strikethrough: Strikethrough;
    }
}
