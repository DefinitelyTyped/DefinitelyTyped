import { Plugin } from "@ckeditor/ckeditor5-core";

export default class SpecialCharactersLatin extends Plugin {
    static readonly pluginName: "SpecialCharactersLatin";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SpecialCharactersLatin: SpecialCharactersLatin;
    }
}
