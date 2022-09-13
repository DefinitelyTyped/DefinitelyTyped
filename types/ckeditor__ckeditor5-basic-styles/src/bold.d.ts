import { Plugin } from "@ckeditor/ckeditor5-core";
import BoldEditing from "./bold/boldediting";
import BoldUI from "./bold/boldui";

export default class Bold extends Plugin {
    static readonly requires: [typeof BoldEditing, typeof BoldUI];
    static readonly pluginName: "Bold";
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Bold: Bold;
    }
}
