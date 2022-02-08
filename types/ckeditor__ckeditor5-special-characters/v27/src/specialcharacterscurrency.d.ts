import { Plugin } from "@ckeditor/ckeditor5-core";

export default class SpecialCharactersCurrency extends Plugin {
    static readonly pluginName: "SpecialCharactersCurrency";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SpecialCharactersCurrency: SpecialCharactersCurrency;
    }
}
