import { Plugin } from "@ckeditor/ckeditor5-core";

export default class SpecialCharactersArrows extends Plugin {
    static readonly pluginName: "SpecialCharactersArrows";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SpecialCharactersArrows: SpecialCharactersArrows;
    }
}
