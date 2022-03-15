import { Plugin } from '@ckeditor/ckeditor5-core';

export default class FontColorEditing extends Plugin {
    static readonly pluginName: 'FontColorEditing';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FontColorEditing: FontColorEditing;
    }
}
