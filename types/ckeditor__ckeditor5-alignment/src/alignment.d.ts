import { Plugin } from "@ckeditor/ckeditor5-core";
import AlignmentEditing, { AlignmentFormat } from "./alignmentediting";
import AlignmentUI from "./alignmentui";

export default class Alignment extends Plugin {
    static readonly requires: [typeof AlignmentEditing, typeof AlignmentUI];
    static readonly pluginName: "Alignment";
}

export interface AlignmentConfig {
    options: Array<string | AlignmentFormat>;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Alignment: Alignment;
    }
}
