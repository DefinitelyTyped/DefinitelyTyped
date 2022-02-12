import Plugin from "@ckeditor/ckeditor5-core/src/plugin";

export default class ShiftEnter extends Plugin {
    static readonly pluginName: "ShiftEnter";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ShiftEnter: ShiftEnter;
    }
}
