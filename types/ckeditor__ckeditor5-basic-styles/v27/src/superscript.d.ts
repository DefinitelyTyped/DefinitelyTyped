import { Plugin } from "@ckeditor/ckeditor5-core";
import SuperscriptEditing from "./superscript/superscriptediting";
import SuperscriptUI from "./superscript/superscriptui";

export default class Superscript extends Plugin {
    static readonly requires: [typeof SuperscriptEditing, typeof SuperscriptUI];
    static readonly pluginName: "Superscript";
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Superscript: Superscript;
    }
}
