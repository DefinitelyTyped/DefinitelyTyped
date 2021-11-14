import { Plugin } from "@ckeditor/ckeditor5-core";

export default class SpecialCharactersMathematical extends Plugin {
    static readonly pluginName: "SpecialCharactersMathematical";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SpecialCharactersMathematical: SpecialCharactersMathematical;
    }
}
