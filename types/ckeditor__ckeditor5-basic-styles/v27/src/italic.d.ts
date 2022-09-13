import { Plugin } from "@ckeditor/ckeditor5-core";
import ItalicEditing from "./italic/italicediting";
import ItalicUI from "./italic/italicui";

export default class Italic extends Plugin {
    static readonly requires: [typeof ItalicEditing, typeof ItalicUI];
    static readonly pluginName: "Italic";
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Italic: Italic;
    }
}
