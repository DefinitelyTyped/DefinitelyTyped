import { Plugin } from '@ckeditor/ckeditor5-core';

export default class FontFamilyUI extends Plugin {
    static readonly pluginName: 'FontFamilyUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FontFamilyUI: FontFamilyUI;
    }
}
