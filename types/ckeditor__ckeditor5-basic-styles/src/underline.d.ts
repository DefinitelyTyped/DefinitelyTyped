import { Plugin } from "@ckeditor/ckeditor5-core";
import UnderlineEditing from "./underline/underlineediting";
import UnderlineUI from "./underline/underlineui";

export default class Underline extends Plugin {
    static readonly requires: [typeof UnderlineEditing, typeof UnderlineUI];
    static readonly pluginName: "Underline";
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Underline: Underline;
    }
}
