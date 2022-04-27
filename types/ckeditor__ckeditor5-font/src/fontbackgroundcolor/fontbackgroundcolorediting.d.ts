import { Plugin } from '@ckeditor/ckeditor5-core';

export default class FontBackgroundColorEditing extends Plugin {
    static readonly pluginName: 'FontBackgroundColorEditing';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FontBackgroundColorEditing: FontBackgroundColorEditing;
    }
}
