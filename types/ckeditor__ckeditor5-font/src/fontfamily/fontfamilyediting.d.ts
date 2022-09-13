import { Plugin } from '@ckeditor/ckeditor5-core';

export default class FontFamilyEditing extends Plugin {
    static readonly pluginName: 'FontFamilyEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FontFamilyEditing: FontFamilyEditing;
    }
}
