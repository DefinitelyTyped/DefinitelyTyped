import { Plugin } from "@ckeditor/ckeditor5-core";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";

export default class HeadingEditing extends Plugin {
    static readonly pluginName: "HeadingEditing";
    static readonly requires: [typeof Paragraph];
    init(): void;
    afterInit(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        HeadingEditing: HeadingEditing;
    }
}
