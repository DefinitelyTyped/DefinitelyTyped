import { Plugin } from '@ckeditor/ckeditor5-core';

export default class FontSizeEditing extends Plugin {
    static readonly pluginName: 'FontSizeEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FontSizeEditing: FontSizeEditing;
    }
}
